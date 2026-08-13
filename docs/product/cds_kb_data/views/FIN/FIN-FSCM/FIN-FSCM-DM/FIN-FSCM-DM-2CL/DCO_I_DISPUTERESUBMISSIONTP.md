---
name: /DCO/I_DISPUTERESUBMISSIONTP
description: "Disputeresubmissiontp"
semantic_vi: "View Disputeresubmissiontp hiển thị dữ liệu resubmission tranh chấp, được sử dụng trong xử lý giao dịch cho dịch vụ tài chính. Nó cung cấp thông tin về các tranh chấp đã được resubmitted và trạng thái của chúng."
keywords:
  - "dispute"
  - "resubmission"
  - "financial services"
  - "transactional processing"
  - "disputeresubmissiontp"
  - "fin-fscm-dm-2cl"
  - "dispute resubmission data"
  - "tranh chấp"
  - "resubmission tranh chấp"
  - "dịch vụ tài chính"
  - "xử lý giao dịch"
semantic_en: "The Disputeresubmissiontp view exposes dispute resubmission data, which is used in transactional processing for financial services. It provides information about resubmitted disputes and their status."
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-DM
  - interface-view
  - transactional-processing
  - dispute
  - component:FIN-FSCM-DM-2CL
  - lob:Other
---
# /DCO/I_DISPUTERESUBMISSIONTP

**Disputeresubmissiontp**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DCoDisputeUUID` | ✓ | |  |  |  |  |
| `DCoDisputeResubmissionUUID` | ✓ | |  |  |  |  |
| `DCoDisputeResubmissionDueDate` |  | |  |  |  |  |
| `DCoDisputeResubmissionActivity` |  | |  |  |  |  |
| `DCoDisputeResubmissionStatus` |  | |  |  |  |  |
| `DCoDisputeResubmissionNoteText` |  | |  |  |  |  |
| `DCoDisputeResubmsnCreationUser` |  | |  |  |  |  |
| `DCoDsputResubmsnCrtnDateTime` |  | |  |  |  |  |
| `DCoDsputResubmsnLastChgdByUsr` |  | |  |  |  |  |
| `DCoDsputResubmsnLstChgDateTime` |  | |  |  |  |  |
| `DCoDisputeResubmsnClosedByUser` |  | |  |  |  |  |
| `DCoDsputResubmsnClsgDateTime` |  | |  |  |  |  |
| `_Dispute` | | ✓ | | | | |

## Source Code

```abap
@EndUserText: { label: 'Dispute Resubmission - TP' }
@AccessControl: { authorizationCheck:     #MANDATORY,
                  personalData.blocking:  #BLOCKED_DATA_EXCLUDED }
@VDM: { viewType: #TRANSACTIONAL,
        usage:    { type: [ #TRANSACTIONAL_PROCESSING_SERVICE ] } }
@ObjectModel: { semanticKey: [ 'DCoDisputeResubmissionActivity' ],
                representativeKey: 'DCoDisputeResubmissionUUID',
                modelingPattern: #TRANSACTIONAL_INTERFACE,
                supportedCapabilities: [ #TRANSACTIONAL_PROVIDER,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE ],
                sapObjectNodeType: { name: 'DCoDisputeResubmission' },
                usageType: { dataClass:      #MIXED,
                             sizeCategory:   #L,
                             serviceQuality: #C } }
@Metadata: { allowExtensions:             true,
             ignorePropagatedAnnotations: true }

define view entity /DCO/I_DisputeResubmissionTP
  as projection on /DCO/R_DisputeResubmissionTP
{

      @Semantics: { uuid: true }
      @ObjectModel: { foreignKey: { association: '_Dispute' } }
  key DCoDisputeUUID,

      @Semantics: { uuid: true }
  key DCoDisputeResubmissionUUID,
      DCoDisputeResubmissionDueDate,
      DCoDisputeResubmissionActivity,
      DCoDisputeResubmissionStatus,
      DCoDisputeResubmissionNoteText,

      @Semantics: { user: { createdBy: true } }
      DCoDisputeResubmsnCreationUser,

      @Semantics: { dateTime: true,
                    systemDateTime: { createdAt: true } }
      DCoDsputResubmsnCrtnDateTime,

      @Semantics: { user: { localInstanceLastChangedBy: true } }
      DCoDsputResubmsnLastChgdByUsr,

      @Semantics: { dateTime: true,
                    systemDateTime: { localInstanceLastChangedAt: true } }
      DCoDsputResubmsnLstChgDateTime,

      DCoDisputeResubmsnClosedByUser,

      @Semantics: { dateTime: true }
      DCoDsputResubmsnClsgDateTime,

      // Exposed Associations
      _Dispute : redirected to parent /DCO/I_DisputeTP

}
```
