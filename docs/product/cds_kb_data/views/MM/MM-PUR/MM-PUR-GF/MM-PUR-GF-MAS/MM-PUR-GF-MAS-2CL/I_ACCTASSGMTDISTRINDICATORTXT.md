---
name: I_ACCTASSGMTDISTRINDICATORTXT
description: "Acctassgmtdistrindicatortxt"
semantic_vi: "View I_ACCTASSGMTDISTRINDICATORTXT hiển thị dữ liệu văn bản cho chỉ số phân bổ phân bổ tài khoản, được sử dụng trong thành phần MM-PUR-GF-MAS-2CL cho nguồn cung và mua sắm."
keywords:
  - "account assignment"
  - "distribution indicator"
  - "text data"
  - "mm-pur-gf-mas-2cl"
  - "sourcing and procurement"
  - "lob"
  - "component"
  - "ekko"
  - "purchase order"
  - "đơn mua hàng"
  - "phân bổ tài khoản"
semantic_en: "The Acctassgmtdistrindicatortxt CDS view exposes text data for account assignment distribution indicators, which are used in the MM-PUR-GF-MAS-2CL component for sourcing and procurement."
app_component: MM-PUR-GF-MAS-2CL
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
  - MM
  - MM-PUR
  - MM-PUR-GF
  - interface-view
  - component:MM-PUR-GF-MAS-2CL
  - lob:Sourcing & Procurement
---
# I_ACCTASSGMTDISTRINDICATORTXT

**Acctassgmtdistrindicatortxt**

| Property | Value |
|---|---|
| App Component | `MM-PUR-GF-MAS-2CL` |
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
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `MultipleAcctAssgmtDistribution` | ✓ | |  | `domvalue_l` |  |  |
| `DistributionKeyText` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |
| `_DistributionInd` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IAADISTRINDTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Distribution Indicator - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'MultipleAcctAssgmtDistribution'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #LANGUAGE_DEPENDENT_TEXT ]
define view I_AcctAssgmtDistrIndicatorTxt
  as select from dd07t

  association        to parent I_AcctAssgmtDistrIndicator as _DistributionInd on $projection.MultipleAcctAssgmtDistribution = _DistributionInd.MultipleAcctAssgmtDistribution

  association [0..1] to I_Language                        as _Language        on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage as Language,

      @ObjectModel.foreignKey.association: '_DistributionInd'
      @ObjectModel.text.element: ['DistributionKeyText']
  key dd07t.domvalue_l as MultipleAcctAssgmtDistribution,

      @Semantics.text: true
      dd07t.ddtext     as DistributionKeyText,

      _DistributionInd,
      _Language
}
where
      dd07t.domname    = 'VRTKZ'
  and dd07t.as4local   = 'A'
  and dd07t.as4vers    = '0000'
  and dd07t.ddlanguage = $session.system_language
```
