---
name: I_AGRMTSPCLARRGMTLGLSTSTEXT
description: "Agrmt Spcl Arrangement Legal Sts - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTSPCLARRGMTLGLSTSTEXT')/$value
semantic_en: "Agrmt Spcl Arrangement Legal Sts - Text"
semantic_vi: "Agrmt Spcl Arrangement Legal Sts - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "agrmt"
  - "spcl"
  - "arrangement"
  - "legal"
  - "sts"
  - "text"
  - "language"
  - "arrgmt"
  - "status"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGRMTSPCLARRGMTLGLSTSTEXT

**Agrmt Spcl Arrangement Legal Sts - Text**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTSPCLARRGMTLGLSTSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `AgrmtSpclArrgmtLegalStatus` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as cms_dte_cag_sa_legal_stat preserving type )` | `CHAR(2)` | Special Arrangement Legal Status |
| `AgrmtSpclArrgmtLegalStatusText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_AgrmtSpclArrgmtLegalStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_AgrmtSpclArrgmtLegalStatus` | `I_AgrmtSpclArrgmtLglSts` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTSPCLARRGMTLGLSTSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTSPCLARRGMTLGLSTSTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICAGSALGLSTSTXT',
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
    representativeKey: 'AgrmtSpclArrgmtLegalStatus'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agrmt Spcl Arrangement Legal Sts - Text'
define view I_AgrmtSpclArrgmtLglStsText
  as select from dd07t
  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language
  association [0..1] to I_AgrmtSpclArrgmtLglSts as _AgrmtSpclArrgmtLegalStatus on $projection.AgrmtSpclArrgmtLegalStatus = _AgrmtSpclArrgmtLegalStatus.agrmtspclarrgmtlegalstatus
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage                                                                      as Language,
      @ObjectModel.foreignKey.association: '_AgrmtSpclArrgmtLegalStatus'
  key cast(substring(domvalue_l, 1, 2) as cms_dte_cag_sa_legal_stat preserving type ) as AgrmtSpclArrgmtLegalStatus,
      @Semantics.text: true
      ddtext                                                                          as AgrmtSpclArrgmtLegalStatusText,

      _Language,
      _AgrmtSpclArrgmtLegalStatus
}
where
      dd07t.domname  = 'CMS_CAG_CA_LEGAL_STAT'
  and dd07t.as4local = 'A'
```
