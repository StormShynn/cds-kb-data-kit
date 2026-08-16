---
name: I_BR_NFFREIGHTNATURE
description: "BR Nffreightnature"
semantic_vi: "View I_BR_NFFREIGHTNATURE cung cấp thông tin về tính chất hàng hóa vận chuyển cho các tài liệu vận chuyển Brazil. Nó được sử dụng để truy cập dữ liệu tính chất hàng hóa vận chuyển."
keywords:
  - "freight"
  - "nature"
  - "brazil"
  - "freight document"
  - "tính chất hàng hóa vận chuyển"
  - "tài liệu vận chuyển"
  - "brazilian freight"
  - "sap fi"
  - "fi-loc-lo-br"
semantic_en: "The I_BR_NFFREIGHTNATURE view provides information about freight nature for Brazilian freight documents. It is used to access freight nature data."
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
  - freight
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFFREIGHTNATURE

**BR Nffreightnature**

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
| `BR_NFFreightNature` | ✓ | |  | `cast ( domvalue_l as logbr_ind_nat_frt )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_NFFreightNatureText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRNFFRTNATR'
@EndUserText.label: 'Brazil Freight Nature Indicator'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'BR_NFFreightNature'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.compositionRoot: true
@Search.searchable: true
@Analytics.internalName: #LOCAL
@Metadata.ignorePropagatedAnnotations:true
@Consumption.ranked: true

define view I_BR_NFFreightNature
  as select from dd07l
  association [0..*] to I_BR_NFFreightNatureText as _Text on $projection.BR_NFFreightNature = _Text.BR_NFFreightNature
{

      @ObjectModel.text.association: '_Text'
  key cast ( domvalue_l as logbr_ind_nat_frt ) as BR_NFFreightNature,

      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                         as DomainValue,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
}

where
      domname  = 'LOGBR_IND_NAT_FRT'
  and as4local = 'A'
```
