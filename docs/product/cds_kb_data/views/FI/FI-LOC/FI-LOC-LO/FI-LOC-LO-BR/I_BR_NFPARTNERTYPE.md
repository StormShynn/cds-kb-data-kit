---
name: I_BR_NFPARTNERTYPE
description: "BR Nfpartnertype"
semantic_vi: "View BR Nfpartnertype hiển thị dữ liệu kinh doanh liên quan đến loại đối tác trong thành phần FI-LOC-LO-BR, có thể được sử dụng khi làm việc với giao dịch tài chính và thông tin đối tác."
keywords:
  - "partner"
  - "type"
  - "fi-loc-lo-br"
  - "financial"
  - "transaction"
  - "partner information"
  - "lo"
  - "br"
  - "nfp"
  - "sap"
  - "cds"
  - "view"
semantic_en: "The BR Nfpartnertype view exposes business data related to partner types in the FI-LOC-LO-BR component, which can be used when working with financial transactions and partner information."
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
  - partner
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFPARTNERTYPE

**BR Nfpartnertype**

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
| `BR_NFPartnerType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_nfpartnertype )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_NFPartnerTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil Nota Fiscal Partner Type'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRNFPARTTYPE'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'BR_NFPartnerType'
@ObjectModel.compositionRoot: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_BR_NFPartnerType
  as select from dd07l
  association [0..*] to I_BR_NFPartnerTypeText as _Text on $projection.BR_NFPartnerType = _Text.BR_NFPartnerType
{
    @ObjectModel.text.association: '_Text'
    key cast ( substring( domvalue_l, 1, 1 )   as logbr_nfpartnertype  ) as BR_NFPartnerType,   
    @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
    _Text
}
where domname  = 'J_1BPARTYP' and as4local = 'A'
```
