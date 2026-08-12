---
name: I_SLSCONTRAPPROVALREASONTXT
description: "Slscontrapprovalreasontxt"
app_component: SD-SLS-OA-CCO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - approval
  - component:SD-SLS-OA-CCO-2CL
  - lob:Sales & Distribution
---
# I_SLSCONTRAPPROVALREASONTXT

**Slscontrapprovalreasontxt**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-CCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  |  |  |
| `SalesContractApprovalReason` | ✓ | |  | `SalesDocApprovalReason` |  |  |
| `SlsContractApprovalReasonName` |  | |  | `SalesDocApprovalReasonName` |  |  |
| `_SalesContractApprovalReason` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesContractApprovalReason` | `I_SalesContractApprovalReason` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Approval Reason for Sls Contract - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@ObjectModel.representativeKey: 'SalesContractApprovalReason'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]

@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_SlsContrApprovalReasonTxt
  as select from I_SalesDocApprovalReasonText  as SlsContractApprovalReasonText
    inner join   I_SalesContractApprovalReason as SalesContractApprovalReason on SalesContractApprovalReason.SalesContractApprovalReason = SlsContractApprovalReasonText.SalesDocApprovalReason

  association [0..1] to I_SalesContractApprovalReason as _SalesContractApprovalReason on $projection.SalesContractApprovalReason = _SalesContractApprovalReason.SalesContractApprovalReason

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key SlsContractApprovalReasonText.Language,

      @Search: {
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.9
      }
      @ObjectModel.foreignKey.association: '_SalesContractApprovalReason'
  key SlsContractApprovalReasonText.SalesDocApprovalReason     as SalesContractApprovalReason,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      SlsContractApprovalReasonText.SalesDocApprovalReasonName as SlsContractApprovalReasonName,

      _SalesContractApprovalReason,
      SlsContractApprovalReasonText._Language

}
where
  SlsContractApprovalReasonText.SDDocumentCategory = 'G';
```
