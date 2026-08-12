---
name: I_SALESCONTRACTTYPETEXT
description: "Salescontracttypetext"
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
  - text-view
  - sales-contract
  - contract
  - text
  - component:SD-SLS-OA-CCO-2CL
  - lob:Sales & Distribution
---
# I_SALESCONTRACTTYPETEXT

**Salescontracttypetext**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-CCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesContractType` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `SalesContractTypeName` |  | |  | `cast( Text.SalesDocumentTypeName as sd_sales_contract_type_name preserving type )` |  |  |
| `_SalesContractType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesContractType` | `I_SalesContractType` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Consumption.ranked: true
@EndUserText.label: 'Sales Contract Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@ObjectModel.representativeKey: 'SalesContractType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_SalesContractTypeText
  as select from I_SalesDocumentTypeText as Text
    inner join   I_SalesContractType     as SalesContractType on Text.SalesDocumentType = SalesContractType.SalesContractType
    
  association [0..1] to I_SalesContractType as _SalesContractType on $projection.SalesContractType = _SalesContractType.SalesContractType

{
      @ObjectModel.foreignKey.association: '_SalesContractType'
      @ObjectModel.text.element: ['SalesContractTypeName']
  key SalesContractType.SalesContractType,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key Text.Language,

      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.9,
        ranking: #LOW }
      @Semantics.text: true
      cast( Text.SalesDocumentTypeName as sd_sales_contract_type_name preserving type ) as SalesContractTypeName,

      _SalesContractType,
      Text._Language
}
```
