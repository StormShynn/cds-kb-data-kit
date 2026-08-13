---
name: /DCO/I_DISPUTETP
description: "Disputetp"
semantic_vi: "View Disputetp hiển thị dữ liệu khiếu nại thu hồi nợ, bao gồm trạng thái khiếu nại, mức độ ưu tiên và lý do tăng cấp, có thể được sử dụng để theo dõi và quản lý khiếu nại trong quá trình thu hồi nợ."
keywords:
  - "dispute"
  - "debt collection"
  - "disputetp"
  - "fin-fscm-dm-2cl"
  - "financial services"
  - "dịch vụ tài chính"
  - "thu hồi nợ"
  - "khiếu nại"
  - "trạng thái khiếu nại"
  - "tăng cấp khiếu nại"
semantic_en: "The Disputetp view exposes debt collection dispute data, including dispute status, priority, and escalation reasons, which can be used to track and manage disputes in the debt collection process."
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
# /DCO/I_DISPUTETP

**Disputetp**

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
| `DebtCollectionsDispute` |  | |  |  |  |  |
| `BusinessPartner` |  | |  |  |  |  |
| `DebtCollectionsCompanyCode` |  | |  |  |  |  |
| `DCoDisputeProcessStep` |  | |  |  |  |  |
| `DCoDisputeProcessStepStatus` |  | |  |  |  |  |
| `DCoDisputePriority` |  | |  |  |  |  |
| `DCoDisputeEscalationReason` |  | |  |  |  |  |
| `DCoDisputeEscalationLevelValue` |  | |  |  |  |  |
| `DCoDisputeCurrency` |  | |  |  |  |  |
| `DCoDisputeProcessor` |  | |  |  |  |  |
| `DCoDisputeProcessorGroup` |  | |  |  |  |  |
| `DCoDisputeProcessCoordinator` |  | |  |  |  |  |
| `DCoDisputeResponsiblePerson` |  | |  |  |  |  |
| `DCoDisputeCustContactPerson` |  | |  |  |  |  |
| `DCoDisputeProcStepDeadlineDate` |  | |  |  |  |  |
| `DCoDisputePlannedCloseDate` |  | |  |  |  |  |
| `DCoDsputDbtCollsActyIsCrted` |  | |  |  |  |  |
| `DCoPredecessorServiceRequest` |  | |  |  |  |  |
| `DCoPredecessorServiceReqUUID` |  | |  |  |  |  |
| `DCoDebtCollectionsActivity` |  | |  |  |  |  |
| `DCoDsputOrigntgInbComm` |  | |  |  |  |  |
| `DCoDsputOrigntgInbCommUUID` |  | |  |  |  |  |
| `DCoDsputCustomerInteraction` |  | |  |  |  |  |
| `DCoDsputCustInteractionUUID` |  | |  |  |  |  |
| `DCoPredecessorDispute` |  | |  |  |  |  |
| `DCoOriginatingBankStatement` |  | |  |  |  |  |
| `DCoOrigntgObjectLogicalSystem` |  | |  |  |  |  |
| `DCoDisputeAssgdServiceRequest` |  | |  |  |  |  |
| `DCoDisputeAssgdSrvcRequestUUID` |  | |  |  |  |  |
| `DCoDisputedSumAmount` |  | |  |  |  |  |
| `DCoDisputeCorrectionSumAmount` |  | |  |  |  |  |
| `DCoDsputToBeWrittenOffSumAmt` |  | |  |  |  |  |
| `DCoDsputAcctgDocColltdSumAmt` |  | |  |  |  |  |
| `DCoDisputeCreationUser` |  | |  |  |  |  |
| `DCoDisputeCreationDateTime` |  | |  |  |  |  |
| `DCoDisputeLastChangedByUser` |  | |  |  |  |  |
| `DCoDisputeLastChangeDateTime` |  | |  |  |  |  |
| `DCoDisputeClosedByUser` |  | |  |  |  |  |
| `DCoDisputeClosingDateTime` |  | |  |  |  |  |
| `DCoDisputeDecidedByUser` |  | |  |  |  |  |
| `DCoDisputeDecisionDateTime` |  | |  |  |  |  |
| `DCoDisputeIsMigrated` |  | |  |  |  |  |
| `DCoDisputeNoteUUID` |  | |  |  |  |  |
| `SAPObjectNodeType` |  | |  |  |  |  |
| `_DisputeResubmission` | | ✓ | | | | |
| `_DisputeAccountingDocument` | | ✓ | | | | |
| `_DsputReltdAcctgDocument` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_NoteBasic` | | ✓ | | | | |
| `_HDMRelation` | | ✓ | | | | |

## Source Code

```abap
@EndUserText: { label: 'Dispute - TP' }
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData: { blocking: #BLOCKED_DATA_EXCLUDED },
                  privilegedAssociations: [ '_NoteBasic',
                                            '_HDMRelation' ] }
@VDM: { viewType: #TRANSACTIONAL,
        usage:    { type: [ #TRANSACTIONAL_PROCESSING_SERVICE ] },
        lifecycle: { contract: { type: #PUBLIC_LOCAL_API } } }
@ObjectModel: { semanticKey: [ 'DebtCollectionsDispute' ],
                representativeKey: 'DCoDisputeUUID',
                sapObjectNodeType:{ name: 'DebtCollectionsDispute' },
                modelingPattern:       #TRANSACTIONAL_INTERFACE,
                supportedCapabilities: [ #TRANSACTIONAL_PROVIDER,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #UI_PROVIDER_PROJECTION_SOURCE ],
                usageType: { dataClass:      #MIXED,
                             sizeCategory:   #XL,
                             serviceQuality: #D } }
@Metadata: { allowExtensions:             true,
             ignorePropagatedAnnotations: true }
@AbapCatalog: { extensibility: { extensible: true,
                                 dataSources: [ 'DebtCollectionsDispute' ],
                                 elementSuffix: 'DMG',
                                 quota: { maximumFields: 500,
                                          maximumBytes: 5000 },
                                 allowNewCompositions: true } }


define root view entity /DCO/I_DisputeTP
  provider contract transactional_interface
  as projection on /DCO/R_DisputeTP as DebtCollectionsDispute

{

      @Semantics: { uuid: true }
  key DCoDisputeUUID,

      @Consumption: { semanticObject: 'DebtCollectionsDispute' }
      DebtCollectionsDispute,

      @Consumption: { semanticObject: 'DebtCollectionsAccount' }
      BusinessPartner,

      DebtCollectionsCompanyCode,
      DCoDisputeProcessStep,
      DCoDisputeProcessStepStatus,
      DCoDisputePriority,
      DCoDisputeEscalationReason,
      DCoDisputeEscalationLevelValue,
      DCoDisputeCurrency,
      DCoDisputeProcessor,

      @Consumption: { semanticObject: 'TeamAsResponsible',
                      semanticObjectMapping: { element:           'RespyMgmtGlobalTeamID',
                                               additionalBinding: [ { element: 'RespyMgmtTeamName',
                                                                      localElement: 'DCoDisputeProcessorGroup' } ] } }
      DCoDisputeProcessorGroup,
      DCoDisputeProcessCoordinator,
      DCoDisputeResponsiblePerson,
      DCoDisputeCustContactPerson,

      @Consumption: { filter: { selectionType: #INTERVAL } }
      DCoDisputeProcStepDeadlineDate,

      @Consumption: { filter: { selectionType: #INTERVAL } }
      DCoDisputePlannedCloseDate,

      @Semantics: { booleanIndicator: true }
      DCoDsputDbtCollsActyIsCrted,

      DCoPredecessorServiceRequest,

      @Semantics: { uuid: true }
      DCoPredecessorServiceReqUUID,

      @Consumption: { semanticObject: 'DebtCollectionsActivity' }
      DCoDebtCollectionsActivity,

      DCoDsputOrigntgInbComm,

      @Semantics: { uuid: true }
      DCoDsputOrigntgInbCommUUID,

      DCoDsputCustomerInteraction,

      @Semantics: { uuid: true }
      DCoDsputCustInteractionUUID,

      @Consumption: { semanticObject: 'DebtCollectionsDispute',
                      semanticObjectMapping: { additionalBinding: [ { element:      'DebtCollectionsDispute',
                                                                      localElement: 'DCoPredecessorDispute' } ] } }
      DCoPredecessorDispute,

      @Consumption: { semanticObject: 'BankStatement',
                      semanticObjectMapping: { additionalBinding: [ { element:      'LogicalSystem',
                                                                      localElement: 'DCoOrigntgObjectLogicalSystem' } ] } }
      DCoOriginatingBankStatement,

      DCoOrigntgObjectLogicalSystem,
      DCoDisputeAssgdServiceRequest,

      @Semantics: { uuid: true }
      DCoDisputeAssgdSrvcRequestUUID,

      @Semantics: { amount: { currencyCode: 'DCoDisputeCurrency' } }
      DCoDisputedSumAmount,

      @Semantics: { amount: { currencyCode: 'DCoDisputeCurrency' } }
      DCoDisputeCorrectionSumAmount,

      @Semantics: { amount: { currencyCode: 'DCoDisputeCurrency' } }
      DCoDsputToBeWrittenOffSumAmt,

      @Semantics: { amount: { currencyCode: 'DCoDisputeCurrency' } }
      DCoDsputAcctgDocColltdSumAmt,

      @Semantics: { user: { createdBy: true } }
      DCoDisputeCreationUser,

      @Semantics: { dateTime: true,
                    systemDateTime: { createdAt: true } }
      @Consumption: { filter: { selectionType: #INTERVAL } }
      DCoDisputeCreationDateTime,

      @Semantics: { user: { lastChangedBy: true } }
      DCoDisputeLastChangedByUser,

      @Semantics: { dateTime: true,
                    systemDateTime: { lastChangedAt: true } }
      @Consumption: { filter: { selectionType: #INTERVAL } }
      DCoDisputeLastChangeDateTime,

      DCoDisputeClosedByUser,

      @Semantics: { dateTime: true }
      @Consumption: { filter: { selectionType: #INTERVAL } }
      DCoDisputeClosingDateTime,

      DCoDisputeDecidedByUser,

      @Semantics: { dateTime: true }
      @Consumption: { filter: { selectionType: #INTERVAL } }
      DCoDisputeDecisionDateTime,

      @Semantics: { booleanIndicator: true }
      DCoDisputeIsMigrated,

      // Re-use components
      @ObjectModel: { sapObjectNodeTypeReference: 'NoteBasic' }
      @UI: { hidden: true }
      @EndUserText: { label:     'Note UUID',
                      quickInfo: 'Note UUID' }
      DCoDisputeNoteUUID,

      @UI: { hidden: true }
      SAPObjectNodeType,

      // Exposed Associations
      _DisputeResubmission       : redirected to composition child /DCO/I_DisputeResubmissionTP,
      _DisputeAccountingDocument : redirected to composition child /DCO/I_DsputAcctgDocumentTP,
      _DsputReltdAcctgDocument   : redirected to composition child /DCO/I_DsputReltdAcctgDocTP,
      _BusinessPartner,
      _NoteBasic,
      _HDMRelation

}
```
