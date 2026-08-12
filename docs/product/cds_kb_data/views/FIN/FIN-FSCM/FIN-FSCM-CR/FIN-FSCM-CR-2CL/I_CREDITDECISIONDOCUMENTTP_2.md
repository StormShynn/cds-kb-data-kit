---
name: I_CREDITDECISIONDOCUMENTTP_2
description: "Creditdecisiondocumenttp 2"
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CR
  - interface-view
  - transactional-processing
  - document
  - credit
  - component:FIN-FSCM-CR-2CL
  - lob:Other
---
# I_CREDITDECISIONDOCUMENTTP_2

**Creditdecisiondocumenttp 2**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditDecisionDocumentUUID` | ✓ | |  |  |  |  |
| `CreditDecisionDocument` |  | |  |  |  |  |
| `RelatedSAPObjectType` |  | |  |  |  |  |
| `CreditDecisionReferenceDoc` |  | |  |  |  |  |
| `SourceLogicalSystem` |  | |  |  |  |  |
| `CrdtDcsnDocExternalReference` |  | |  |  |  |  |
| `BusinessPartner` |  | |  |  |  |  |
| `CreditSegment` |  | |  |  |  |  |
| `CreditRiskClass` |  | |  |  |  |  |
| `CreditDecisionDocumentStatus` |  | |  |  |  |  |
| `CrdtDcsnDocPlannedCloseDate` |  | |  |  |  |  |
| `CrdtDcsnDocumentProcessingUser` |  | |  |  |  |  |
| `ApprvlHierLastDrvtnDateTime` |  | |  |  |  |  |
| `IsApprovalRelevant` |  | |  |  |  |  |
| `CreditDecisionDocumentCategory` |  | |  |  |  |  |
| `CreditDecisionDocumentPriority` |  | |  |  |  |  |
| `CreditDecisionDocumentReason` |  | |  |  |  |  |
| `OpenCreditAmount` |  | |  |  |  |  |
| `CheckedCreditRiskAmount` |  | |  |  |  |  |
| `CreditDecisionCurrency` |  | |  |  |  |  |
| `CreditCheckLog` |  | |  |  |  |  |
| `StaticLmtUtilznCrdtChkIsFailed` |  | |  |  |  |  |
| `MaxDocAmountCreditChkIsFailed` |  | |  |  |  |  |
| `DynLimitUtilznCrdtChkIsFailed` |  | |  |  |  |  |
| `MaxDunningLevelCrdtChkIsFailed` |  | |  |  |  |  |
| `OldestOpenItemCrdtChkIsFailed` |  | |  |  |  |  |
| `DaysSlsOutStdgCrdtChkIsFailed` |  | |  |  |  |  |
| `OverdueOpenItemCrdtChkIsFailed` |  | |  |  |  |  |
| `LimitValidityCrdtChkIsFailed` |  | |  |  |  |  |
| `CrdtDecisionDocumentLastAction` |  | |  |  |  |  |
| `CrdtDcsnDocLastActionByUser` |  | |  |  |  |  |
| `CrdtDcsnDocLastActionDateTime` |  | |  |  |  |  |
| `CreditDecisionReqUTCDateTime` |  | |  |  |  |  |
| `SalesEmployeeUserID` |  | |  |  |  |  |
| `CrdtDcsnDocumentCreatedByUser` |  | |  |  |  |  |
| `CrdtDcsnDocCreationDateTime` |  | |  |  |  |  |
| `CrdtDcsnDocLastChangedByUser` |  | |  |  |  |  |
| `CrdtDcsnDocLastChangeDateTime` |  | |  |  |  |  |
| `CrdtDcsnDocumentClosedByUser` |  | |  |  |  |  |
| `CrdtDcsnDocumentCloseDateTime` |  | |  |  |  |  |
| `CreditDecisionDocumentNoteUUID` |  | |  |  |  |  |
| `SAPObjectNodeType` |  | |  |  |  |  |
| `_ApprovalHierarchy` | | ✓ | | | | |
| `_NoteBasic` | | ✓ | | | | |
| `_HDMRelation` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData: { blocking: #BLOCKED_DATA_EXCLUDED },
                  privilegedAssociations: [ '_NoteBasic',
                                            '_HDMRelation' ] }
@VDM: { viewType: #TRANSACTIONAL,
        usage.type: [ #TRANSACTIONAL_PROCESSING_SERVICE ],
        lifecycle.contract.type: #PUBLIC_LOCAL_API }
@ObjectModel: { usageType: { dataClass: #TRANSACTIONAL,
                             serviceQuality: #B,
                             sizeCategory: #M  },
                semanticKey: [ 'CreditDecisionDocument' ],
                representativeKey: 'CreditDecisionDocumentUUID',
                sapObjectNodeType.name: 'CreditDecisionDocument',
                modelingPattern: #TRANSACTIONAL_INTERFACE,
                supportedCapabilities: [ #TRANSACTIONAL_PROVIDER,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #UI_PROVIDER_PROJECTION_SOURCE ] }
@EndUserText.label: 'Credit Decision Document - TP'
@Metadata: { allowExtensions:             true,
             ignorePropagatedAnnotations: true }
define root view entity I_CreditDecisionDocumentTP_2
  provider contract transactional_interface
  as projection on R_CreditDecisionDocumentTP_2 as CreditDecisionDocument
{
      @Semantics.uuid: true
  key CreditDecisionDocumentUUID,
      CreditDecisionDocument,
      RelatedSAPObjectType,
      CreditDecisionReferenceDoc,
      SourceLogicalSystem,
      CrdtDcsnDocExternalReference,
      BusinessPartner,
      CreditSegment,
      CreditRiskClass,
      CreditDecisionDocumentStatus,
      CrdtDcsnDocPlannedCloseDate,
      CrdtDcsnDocumentProcessingUser,
      @Semantics.dateTime: true
      ApprvlHierLastDrvtnDateTime,
      IsApprovalRelevant,
      CreditDecisionDocumentCategory,
      CreditDecisionDocumentPriority,
      CreditDecisionDocumentReason,
      @Semantics.amount.currencyCode: 'CreditDecisionCurrency'
      OpenCreditAmount,
      @Semantics.amount.currencyCode: 'CreditDecisionCurrency'
      CheckedCreditRiskAmount,
      CreditDecisionCurrency,
      CreditCheckLog,
      @Semantics.booleanIndicator: true
      StaticLmtUtilznCrdtChkIsFailed,
      @Semantics.booleanIndicator: true
      MaxDocAmountCreditChkIsFailed,
      @Semantics.booleanIndicator: true
      DynLimitUtilznCrdtChkIsFailed,
      @Semantics.booleanIndicator: true
      MaxDunningLevelCrdtChkIsFailed,
      @Semantics.booleanIndicator: true
      OldestOpenItemCrdtChkIsFailed,
      @Semantics.booleanIndicator: true
      DaysSlsOutStdgCrdtChkIsFailed,
      @Semantics.booleanIndicator: true
      OverdueOpenItemCrdtChkIsFailed,
      @Semantics.booleanIndicator: true
      LimitValidityCrdtChkIsFailed,
      CrdtDecisionDocumentLastAction,
      CrdtDcsnDocLastActionByUser,
      @Semantics.dateTime: true
      CrdtDcsnDocLastActionDateTime,
      CreditDecisionReqUTCDateTime,
      SalesEmployeeUserID,
      @Semantics.user: { createdBy: true}
      CrdtDcsnDocumentCreatedByUser,
      @Semantics: { dateTime: true,
                    systemDateTime: { createdAt: true } }
      CrdtDcsnDocCreationDateTime,
      @Semantics.user: { lastChangedBy: true }
      CrdtDcsnDocLastChangedByUser,
      @Semantics: { dateTime: true,
                    systemDateTime.lastChangedAt: true }
      CrdtDcsnDocLastChangeDateTime,
      CrdtDcsnDocumentClosedByUser,
      @Semantics.dateTime: true
      CrdtDcsnDocumentCloseDateTime,
      @ObjectModel: { sapObjectNodeTypeReference: 'NoteBasic' }
      @UI: { hidden: true }
      CreditDecisionDocumentNoteUUID,
      @UI: { hidden: true }
      SAPObjectNodeType,

      /* Associations */
      _ApprovalHierarchy : redirected to composition child I_CrdtDcsnDocApprvlHierTP_2,
      _NoteBasic,
      _HDMRelation
}
```
