---
name: I_BR_ICMSTAXSITUATIONTEXT
description: "BR Icmstaxsituationtext"
semantic_vi: "View I_BR_ICMSTAXSITUATIONTEXT cung cấp mô tả tình huống thuế cho các giao dịch kinh doanh trong một ngôn ngữ cụ thể. Nó được sử dụng để lấy nhãn văn bản cho tình huống thuế trong các ứng dụng tài chính."
keywords:
  - "tax situation"
  - "tình huống thuế"
  - "business transaction"
  - "giao dịch kinh doanh"
  - "financial application"
  - "ứng dụng tài chính"
  - "language"
  - "ngôn ngữ"
  - "description"
  - "mô tả"
  - "fi"
  - "fi-loc"
semantic_en: "The I_BR_ICMSTAXSITUATIONTEXT view provides tax situation descriptions for business transactions in a specific language. It is used to retrieve text labels for tax situations in financial applications."
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
  - tax
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_ICMSTAXSITUATIONTEXT

**BR Icmstaxsituationtext**

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
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` |  |  |
| `BR_ICMSTaxSituation` | ✓ | |  | `cast(case substring( domvalue_l, 1, 1 ) when 'A' then '41' when 'B' then '51' else concat(substring( domvalue_l, 1, 1 ), '0') end as logbr_taxsit)` |  |  |
| `BR_ICMSTaxSituationDesc` |  | |  | `cast(ddtext as logbr_icmstaxsituation preserving type)` |  |  |
| `_BR_ICMSTaxSituation` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_ICMSTaxSituation` | `I_BR_ICMSTaxSituation` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil ICMS Tax Situation - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRICMSTAXSITT'
@ObjectModel.representativeKey: 'BR_ICMSTaxSituation'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@AbapCatalog.preserveKey:true

define view I_BR_ICMSTaxSituationText as select distinct from dd07t
  association [1..1] to I_BR_ICMSTaxSituation as _BR_ICMSTaxSituation on $projection.BR_ICMSTaxSituation = _BR_ICMSTaxSituation.BR_ICMSTaxSituation
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras preserving type ) as Language,
  @ObjectModel.foreignKey.association: '_BR_ICMSTaxSituation'
  key cast(case substring( domvalue_l, 1, 1 )
    when 'A' then '41'
    when 'B' then '51'
    else concat(substring( domvalue_l, 1, 1 ), '0')
  end as logbr_taxsit) as BR_ICMSTaxSituation,
  //key cast( substring( domvalue_l, 1, 1 ) as logbr_taxsit preserving type ) as BR_ICMSTaxSituation,    
  @Semantics.text
  cast(ddtext as logbr_icmstaxsituation preserving type) as BR_ICMSTaxSituationDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]  
  _BR_ICMSTaxSituation, 
  _Language 
}
where domname = 'J_1BTAXSIT' 
  and as4local = 'A'
```
