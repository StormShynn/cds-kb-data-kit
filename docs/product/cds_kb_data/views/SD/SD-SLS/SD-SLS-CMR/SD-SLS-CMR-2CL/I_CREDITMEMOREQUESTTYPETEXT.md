---
name: I_CREDITMEMOREQUESTTYPETEXT
description: "Creditmemorequesttypetext"
app_component: SD-SLS-CMR-2CL
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
  - SD-SLS-CMR
  - interface-view
  - text-view
  - text
  - credit
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_CREDITMEMOREQUESTTYPETEXT

**Creditmemorequesttypetext**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditMemoRequestType` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `CreditMemoRequestTypeName` |  | |  | `cast( Text.SalesDocumentTypeName as credit_memo_request_type_name preserving type )` |  |  |
| `_CreditMemoRequestType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreditMemoRequestType` | `I_CreditMemoRequestType` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Consumption.ranked: true
@EndUserText.label: 'Credit Memo Request Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@ObjectModel.representativeKey: 'CreditMemoRequestType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_CreditMemoRequestTypeText
  as select from I_SalesDocumentTypeText as Text
    inner join   I_CreditMemoRequestType as CreditMemoRequestType on Text.SalesDocumentType = CreditMemoRequestType.CreditMemoRequestType

  association [0..1] to I_CreditMemoRequestType as _CreditMemoRequestType on $projection.CreditMemoRequestType = _CreditMemoRequestType.CreditMemoRequestType

{
      @ObjectModel.foreignKey.association: '_CreditMemoRequestType'
      @ObjectModel.text.element: ['CreditMemoRequestTypeName']
  key CreditMemoRequestType.CreditMemoRequestType,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key Text.Language,

      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.9,
        ranking: #LOW }
      @Semantics.text: true
      cast( Text.SalesDocumentTypeName as credit_memo_request_type_name preserving type ) as CreditMemoRequestTypeName,

      _CreditMemoRequestType,
      Text._Language
}
```
