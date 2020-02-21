import React from 'react';
import ServiceInvolvementDetailsSummary from '../models/ServiceInvolvementDetailsSummary';

const AccordionSummary: React.FC<{ serviceInvolvement: ServiceInvolvementDetailsSummary,}> = (props: { serviceInvolvement: ServiceInvolvementDetailsSummary, }) => {
    return (
        <div className="govuk-accordion__section-summary govuk-body" id="accordion-with-summary-sections-summary-1">
            <p className="govuk-body govuk-!-font-size-14 govuk-!-margin-0">Information is correct as of <b>{props.serviceInvolvement.correctAsOf}</b></p>
            <p className="govuk-body govuk-!-font-size-14 govuk-!-margin-0">Information is synced with <b>{props.serviceInvolvement.syncedWith}</b> for the duration of <b>{props.serviceInvolvement.syncedDuraction}</b></p>
        </div>
    )
}

export default AccordionSummary;