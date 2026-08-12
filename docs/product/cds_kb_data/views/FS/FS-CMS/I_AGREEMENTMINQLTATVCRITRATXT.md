---
name: I_AGREEMENTMINQLTATVCRITRATXT
description: "Agreement Minimum Qualitative Crt - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTMINQLTATVCRITRATXT')/$value
semantic_en: "Agreement Minimum Qualitative Crt - Text"
semantic_vi: "Agreement Minimum Qualitative Crt - Text — CDS view giao diện dựa trên tcms_cag_mqcrt_t."
keywords:
  - "agreement"
  - "minimum"
  - "qualitative"
  - "crt"
  - "text"
  - "colltrl"
  - "agrmt"
  - "qltatv"
  - "criteria"
  - "language"
  - "critra"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTMINQLTATVCRITRATXT

**Agreement Minimum Qualitative Crt - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTMINQLTATVCRITRATXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColltrlAgrmtMinQltatvCriteria` | ✓ | |  | `min_ql_criterion` | `CHAR(6)` | MInimum Qualitative Criterion |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which Description is Required |
| `ColltrlAgrmtMinQltatvCritraTxt` |  | |  | `name` | `CHAR(40)` | Name of Minimum Qualitative Criterion in specified Language |
| `_Language` | | ✓ | | | | |
| `_ColltrlAgrmtMinQltatvCriteria` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ColltrlAgrmtMinQltatvCriteria` | `I_AgreementMinQltatvCriteria` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTMINQLTATVCRITRATXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTMINQLTATVCRITRATXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICAGMINQCRTTXT',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    dataCategory: #TEXT,
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'ColltrlAgrmtMinQltatvCriteria'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Minimum Qualitative Crt - Text'
define view I_AgreementMinQltatvCritraTxt
  as select from tcms_cag_mqcrt_t
  association [0..1] to I_Language                   as _Language                      on $projection.Language = _Language.Language
  association [0..1] to I_AgreementMinQltatvCriteria as _ColltrlAgrmtMinQltatvCriteria on $projection.ColltrlAgrmtMinQltatvCriteria = _ColltrlAgrmtMinQltatvCriteria.ColltrlAgrmtMinQltatvCriteria
{
      @ObjectModel.foreignKey.association: '_ColltrlAgrmtMinQltatvCriteria'
  key min_ql_criterion as ColltrlAgrmtMinQltatvCriteria,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language         as Language,
      @Semantics.text: true
      name             as ColltrlAgrmtMinQltatvCritraTxt,

      _Language,
      _ColltrlAgrmtMinQltatvCriteria
}
```
