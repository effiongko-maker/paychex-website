import { Reveal } from "@/components/motion/Reveal";
import { ExecutionStages } from "@/components/patterns/ExecutionStages";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { homeDeliveryModel } from "@/config/home";
import { cn } from "@/lib/cn";
import { chapterSignatureClass } from "@/lib/layout";
import { motionTokens } from "@/lib/motion";

export function HomeDeliveryModel() {
  return (
    <Section background="inverse" className={chapterSignatureClass}>
      <Container>
        <div className="flex flex-col gap-14 md:gap-16 lg:gap-20">
          <Reveal
            direction="up"
            distance={motionTokens.distance.sm}
            className="w-full max-w-statement"
          >
            <div className="flex flex-col gap-5 md:gap-6">
              <Heading
                variant="h1"
                className="font-medium text-inverse-foreground"
              >
                {homeDeliveryModel.headline}
              </Heading>
              <Heading
                variant="lead"
                className={cn("max-w-measure text-inverse-muted")}
              >
                {homeDeliveryModel.supporting}
              </Heading>
            </div>
          </Reveal>

          <ExecutionStages stages={homeDeliveryModel.stages} />
        </div>
      </Container>
    </Section>
  );
}
