---
name: I_BR_NFFREIGHTNATURETEXT
description: "BR Nffreightnaturetext"
semantic_vi: "View I_BR_NFFREIGHTNATURETEXT cung cấp dữ liệu văn bản về tính chất vận tải cho quản lý vận tải Brazil, thường được sử dụng khi hiển thị chi tiết tính chất vận tải."
keywords:
  - "freight"
  - "nature"
  - "text"
  - "brazil"
  - "freight management"
  - "fi-loc-lo-br"
  - "fi"
  - "fi-loc"
  - "fi-loc-lo"
  - "lob:finance"
  - "interface view"
  - "text view"
semantic_en: "The I_BR_NFFREIGHTNATURETEXT view provides freight nature text data for Brazilian freight management, typically used when displaying freight nature details."
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - text-view
  - freight
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFFREIGHTNATURETEXT

**BR Nffreightnaturetext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type)` |  |  |
| `BR_NFFreightNature` | ✓ | |  | `cast ( domvalue_l as logbr_ind_nat_frt )` |  |  |
| `BR_NFFreightNatureDesc` |  | |  | `cast ( ddtext as logbr_ind_nat_frt_desc preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_BR_NFFreightNature` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFFreightNature` | `I_BR_NFFreightNature` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil Freight Nature Indicator - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics: {dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.sqlViewName: 'IBRNFFRTNATRTEXT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.representativeKey: 'BR_NFFreightNature'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true 
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true

define view I_BR_NFFreightNatureText as select from dd07t
  association [1..1] to I_BR_NFFreightNature as _BR_NFFreightNature on $projection.BR_NFFreightNature = _BR_NFFreightNature.BR_NFFreightNature
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @Semantics.language: true
  key cast( ddlanguage as spras preserving type) as Language,
  
  @ObjectModel.foreignKey.association: '_BR_NFFreightNature'
  key cast ( domvalue_l as logbr_ind_nat_frt ) as BR_NFFreightNature,
  
  @Search.fuzzinessThreshold: 0.8
  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  @Semantics.text: true
  cast ( ddtext as logbr_ind_nat_frt_desc preserving type) as BR_NFFreightNatureDesc,
  
  @Consumption.hidden: true
  dd07t.domvalue_l as DomainValue,
  
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT] 
  _BR_NFFreightNature,
  _Language
}
where domname = 'LOGBR_IND_NAT_FRT' and as4local = 'A'
```
