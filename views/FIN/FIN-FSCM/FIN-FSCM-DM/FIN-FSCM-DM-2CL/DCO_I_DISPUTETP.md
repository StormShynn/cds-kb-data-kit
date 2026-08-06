---
name: /DCO/I_DISPUTETP
description: Disputetp
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

| Field | Data Source |
|---|---|
| key `DCoDisputeUUID` | `DCoDisputeUUID` |
| `DebtCollectionsDispute` | `DebtCollectionsDispute` |
| `BusinessPartner` | `BusinessPartner` |
| `DebtCollectionsCompanyCode` | `DebtCollectionsCompanyCode` |
| `DCoDisputeProcessStep` | `DCoDisputeProcessStep` |
| `DCoDisputeProcessStepStatus` | `DCoDisputeProcessStepStatus` |
| `DCoDisputePriority` | `DCoDisputePriority` |
| `DCoDisputeEscalationReason` | `DCoDisputeEscalationReason` |
| `DCoDisputeEscalationLevelValue` | `DCoDisputeEscalationLevelValue` |
| `DCoDisputeCurrency` | `DCoDisputeCurrency` |
| `DCoDisputeProcessor` | `DCoDisputeProcessor` |
| `DCoDisputeProcessorGroup` | `] } } DCoDisputeProcessorGroup` |
| `DCoDisputeProcessCoordinator` | `DCoDisputeProcessCoordinator` |
| `DCoDisputeResponsiblePerson` | `DCoDisputeResponsiblePerson` |
| `DCoDisputeCustContactPerson` | `DCoDisputeCustContactPerson` |
| `DCoDisputeProcStepDeadlineDate` | `} DCoDisputeProcStepDeadlineDate` |
| `DCoDisputePlannedCloseDate` | `} DCoDisputePlannedCloseDate` |
| `DCoDsputDbtCollsActyIsCrted` | `DCoDsputDbtCollsActyIsCrted` |
| `DCoPredecessorServiceRequest` | `DCoPredecessorServiceRequest` |
| `DCoPredecessorServiceReqUUID` | `DCoPredecessorServiceReqUUID` |
| `DCoDebtCollectionsActivity` | `DCoDebtCollectionsActivity` |
| `DCoDsputOrigntgInbComm` | `DCoDsputOrigntgInbComm` |
| `DCoDsputOrigntgInbCommUUID` | `DCoDsputOrigntgInbCommUUID` |
| `DCoDsputCustomerInteraction` | `DCoDsputCustomerInteraction` |
| `DCoDsputCustInteractionUUID` | `DCoDsputCustInteractionUUID` |
| `DCoPredecessorDispute` | `] } } DCoPredecessorDispute` |
| `DCoOriginatingBankStatement` | `] } } DCoOriginatingBankStatement` |
| `DCoOrigntgObjectLogicalSystem` | `DCoOrigntgObjectLogicalSystem` |
| `DCoDisputeAssgdServiceRequest` | `DCoDisputeAssgdServiceRequest` |
| `DCoDisputeAssgdSrvcRequestUUID` | `DCoDisputeAssgdSrvcRequestUUID` |
| `DCoDisputedSumAmount` | `} DCoDisputedSumAmount` |
| `DCoDisputeCorrectionSumAmount` | `} DCoDisputeCorrectionSumAmount` |
| `DCoDsputToBeWrittenOffSumAmt` | `} DCoDsputToBeWrittenOffSumAmt` |
| `DCoDsputAcctgDocColltdSumAmt` | `} DCoDsputAcctgDocColltdSumAmt` |
| `DCoDisputeCreationUser` | `} DCoDisputeCreationUser` |
| `DCoDisputeCreationDateTime` | `} } DCoDisputeCreationDateTime` |
| `DCoDisputeLastChangedByUser` | `} DCoDisputeLastChangedByUser` |
| `DCoDisputeLastChangeDateTime` | `} } DCoDisputeLastChangeDateTime` |
| `DCoDisputeClosedByUser` | `DCoDisputeClosedByUser` |
| `DCoDisputeClosingDateTime` | `} DCoDisputeClosingDateTime` |
| `DCoDisputeDecidedByUser` | `DCoDisputeDecidedByUser` |
| `DCoDisputeDecisionDateTime` | `} DCoDisputeDecisionDateTime` |
| `DCoDisputeIsMigrated` | `DCoDisputeIsMigrated` |
| `DCoDisputeNoteUUID` | `DCoDisputeNoteUUID` |
| `SAPObjectNodeType` | `SAPObjectNodeType` |
| `_DisputeResubmission` | *Association* |
| `_DisputeAccountingDocument` | *Association* |
| `_DsputReltdAcctgDocument` | *Association* |
| `_BusinessPartner` | *Association* |
| `_NoteBasic` | *Association* |
| `_HDMRelation` | *Association* |

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
