---
name: I_CUSTRETAPPROVALREASONTXT
description: "Custretapprovalreasontxt"
app_component: SD-SLS-RE-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-RE
  - interface-view
  - approval
  - component:SD-SLS-RE-2CL
  - lob:Sales & Distribution
---
# I_CUSTRETAPPROVALREASONTXT

**Custretapprovalreasontxt**

| Property | Value |
|---|---|
| App Component | `SD-SLS-RE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  |  |  |
| `CustomerReturnApprovalReason` | ✓ | |  | `SalesDocApprovalReason` |  |  |
| `CustReturnApprovalReasonName` |  | |  | `SalesDocApprovalReasonName` |  |  |
| `_CustomerReturnApprovalReason` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustomerReturnApprovalReason` | `I_CustomerReturnApprovalReason` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Approval Reason for Returns Order - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@ObjectModel.representativeKey: 'CustomerReturnApprovalReason'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]

@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_CustRetApprovalReasonTxt
  as select from I_SalesDocApprovalReasonText   as CustReturnApprovalReasonText
    inner join   I_CustomerReturnApprovalReason as CustomerReturnApprovalReason on CustomerReturnApprovalReason.CustomerReturnApprovalReason = CustReturnApprovalReasonText.SalesDocApprovalReason

  association [0..1] to I_CustomerReturnApprovalReason as _CustomerReturnApprovalReason on $projection.CustomerReturnApprovalReason = _CustomerReturnApprovalReason.CustomerReturnApprovalReason

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key CustReturnApprovalReasonText.Language,

      @Search: {
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.9
      }
      @ObjectModel.foreignKey.association: '_CustomerReturnApprovalReason'
  key CustReturnApprovalReasonText.SalesDocApprovalReason     as CustomerReturnApprovalReason,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      CustReturnApprovalReasonText.SalesDocApprovalReasonName as CustReturnApprovalReasonName,

      _CustomerReturnApprovalReason,
      CustReturnApprovalReasonText._Language

}
where
  CustReturnApprovalReasonText.SDDocumentCategory = 'H';
```
