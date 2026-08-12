---
name: I_AGRMTSPCLARRGMTPROCGSTS
description: "Agrmt Special Arrangement Procg Status"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTSPCLARRGMTPROCGSTS')/$value
semantic_en: "Agrmt Special Arrangement Procg Status"
semantic_vi: "Agrmt Special Arrangement Procg Status — CDS view giao diện dựa trên dd07l."
keywords:
  - "agrmt"
  - "special"
  - "arrangement"
  - "procg"
  - "status"
  - "spcl"
  - "arrgmt"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGRMTSPCLARRGMTPROCGSTS

**Agrmt Special Arrangement Procg Status**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTSPCLARRGMTPROCGSTS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgrmtSpclArrgmtProcgStatus` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as cms_dte_cag_sa_proc_stat preserving type )` | `CHAR(2)` | Processing Status of Special Arrangement |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AgrmtSpclArrgmtProcgStsText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTSPCLARRGMTPROCGSTS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGRMTSPCLARRGMTPROCGSTS')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGSAPROCSTS',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'AgrmtSpclArrgmtProcgStatus'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agrmt Special Arrangement Procg Status'
define view I_AgrmtSpclArrgmtProcgSts
  as select from dd07l
  association [0..*] to I_AgrmtSpclArrgmtProcgStsText as _Text on $projection.AgrmtSpclArrgmtProcgStatus = _Text.AgrmtSpclArrgmtProcgStatus
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as cms_dte_cag_sa_proc_stat preserving type ) as AgrmtSpclArrgmtProcgStatus,

      _Text
}
where
      dd07l.domname  = 'CMS_CAG_SA_PROC_STAT'
  and dd07l.as4local = 'A'
```
