---
name: I_LEGALCONTEXTTP
description: Legalcontexttp
app_component: CM-CTX-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-CTX
  - interface-view
  - transactional-processing
  - text
  - component:CM-CTX-2CL
  - lob:Other
---
# I_LEGALCONTEXTTP

**Legalcontexttp**

| Property | Value |
|---|---|
| App Component | `CM-CTX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `LglCntntMContextUUID` | ✓ | |  |  |
| `LglCntntMContext` |  | |  |  |
| `LglCntntMContextVersion` |  | |  |  |
| `LglCntntMContextTitle` |  | |  |  |
| `LglCntntMContextOwner` |  | |  |  |
| `LglCntntMProfile` |  | |  |  |
| `LglCntntMContextStatus` |  | |  |  |
| `LglCntntMIntegrationType` |  | |  |  |
| `LglCntntMContextValidFromDate` |  | |  |  |
| `LglCntntMContextValidToDate` |  | |  |  |
| `LglCntntMCntxtLanguage` |  | |  |  |
| `LglCntntMPrevCntxtVers` |  | |  |  |
| `LglCntntMCntxtIsReadOnly` |  | |  |  |
| `LglCntntMGovLaw` |  | |  |  |
| `LglCntntMCntxtAccessLvl` |  | |  |  |
| `LglCntntMMainOrgType` |  | |  |  |
| `LglCntntMMainOrgCoCode` |  | |  |  |
| `LglCntntMMainOrgSalesOrg` |  | |  |  |
| `LglCntntMMainOrgPurOrg` |  | |  |  |
| `LglCntntMCreatedByUser` |  | |  |  |
| `LglCntntMCreatedUTCDateTime` |  | |  |  |
| `LglCntntMChangedByUser` |  | |  |  |
| `LglCntntMChangedUTCDateTime` |  | |  |  |
| `IsEndOfPurposeBlocked` |  | |  |  |
| `_LCMCtxExtContactTP` | | ✓ | | |
| `_LCMCtxIntContactTP` | | ✓ | | |
| `_LCMContextEntityTP` | | ✓ | | |
| `_LCMContextRelationshipTP` | | ✓ | | |
| `_LCMContextObjectLinksTP` | | ✓ | | |
| `_LCMContextCategoryGroupTP` | | ✓ | | |
| `_LCMContextDateTP` | | ✓ | | |
| `_LglCntntMContextDocTP` | | ✓ | | |
| `_LglCntntMCntxtRnwlAndTermnTP` | | ✓ | | |
| `_LglCntntMCntxtPhseTP` | | ✓ | | |
| `_LglCntntMCntxtRuleGroupTP` | | ✓ | | |

## Source Code

```abap
@AccessControl:{
    authorizationCheck: #CHECK,
    personalData.blocking: #BLOCKED_DATA_EXCLUDED
    }
@EndUserText.label: 'Legal Contexts - TP'
@ObjectModel: {
    usageType: {
        sizeCategory: #L,
        serviceQuality: #C,
        dataClass:#TRANSACTIONAL
    },
    modelingPattern: #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@VDM.viewType: #TRANSACTIONAL
@VDM.usage.type:[#TRANSACTIONAL_PROCESSING_SERVICE]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name:'LegalContext'
define root view entity I_LegalContextTP
  provider contract transactional_interface
  as projection on I_LCMContextTP
{
  key     LglCntntMContextUUID,
          LglCntntMContext,
          LglCntntMContextVersion,
          LglCntntMContextTitle,
          LglCntntMContextOwner,
          LglCntntMProfile,

          LglCntntMContextStatus,

          LglCntntMIntegrationType,

          LglCntntMContextValidFromDate,
          LglCntntMContextValidToDate,

          LglCntntMCntxtLanguage,
          LglCntntMPrevCntxtVers,
          LglCntntMCntxtIsReadOnly,
          LglCntntMGovLaw,
          LglCntntMCntxtAccessLvl,

          LglCntntMMainOrgType,
          LglCntntMMainOrgCoCode,
          LglCntntMMainOrgSalesOrg,
          LglCntntMMainOrgPurOrg,
          // Make Read Only, when supported in Interface view
          //          LglCntntMLongText,

          LglCntntMCreatedByUser,
          LglCntntMCreatedUTCDateTime,
          LglCntntMChangedByUser,
          LglCntntMChangedUTCDateTime,

          @Semantics.booleanIndicator: true
          @Consumption.hidden: true
          IsEndOfPurposeBlocked,

          _LCMCtxExtContactTP           : redirected to composition child I_LegalContextExtContactTP,
          _LCMCtxIntContactTP           : redirected to composition child I_LegalContextIntContactTP,
          _LCMContextEntityTP           : redirected to composition child I_LegalContextEntityTP,
          _LCMContextRelationshipTP     : redirected to composition child I_LegalContextRelationshipTP,
          _LCMContextObjectLinksTP      : redirected to composition child I_LegalContextLinkedObjectTP,
          _LCMContextCategoryGroupTP    : redirected to composition child I_LegalContextCategoryGroupTP,
          _LCMContextDateTP             : redirected to composition child I_LegalContextDateTP,
          _LglCntntMContextDocTP        : redirected to composition child I_LegalContextDocumentTP,
          _LglCntntMCntxtRnwlAndTermnTP : redirected to composition child I_LegalContextRnwlAndTermnTP,
          _LglCntntMCntxtPhseTP         : redirected to composition child I_LegalContextPhaseTP,
          _LglCntntMCntxtRuleGroupTP    : redirected to composition child I_LegalContextRuleGroupTP
}
```
