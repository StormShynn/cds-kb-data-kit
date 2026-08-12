---
name: I_MAINTORDPROCSUBORDDPHASETXT
description: "Maint Order Process Sub Phase - Txt"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDPROCSUBORDDPHASETXT')/$value
semantic_en: "Maint Order Process Sub Phase - Txt"
semantic_vi: "Maint Order Process Sub Phase - Txt — CDS view giao diện dựa trên eam_ostat_ph_sph."
keywords:
  - "maint"
  - "order"
  - "process"
  - "sub"
  - "phase"
  - "txt"
  - "maintenance"
  - "processing"
  - "code"
  - "overall"
  - "status"
  - "entity"
  - "language"
tags:
  - PM
  - component:PM-WOC-MO-2CL
  - interface-view
  - lob:plant maintenance
  - order
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
---
# I_MAINTORDPROCSUBORDDPHASETXT

**Maint Order Process Sub Phase - Txt**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDPROCSUBORDDPHASETXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceProcessingPhase` | ✓ | |  | `cast( _Phase.eamovrlprocphase as pm_phase )` | `CHAR(1)` | Maintenance Processing Phase |
| `MaintOrdProcessSubPhaseCode` | ✓ | | `_Phase` | `eamovrlprocsubphase` | `CHAR(4)` | Process Subphase |
| `EAMOverallStatusEntity` | ✓ | | `_Phase` | `entity_type` | `CHAR(3)` | Entity Type |
| `Language` | ✓ | | `_PhaseText` | `language` | `LANG(1)` | Language Key |
| `MaintOrdProcessSubPhaseCodeTxt` |  | | `_PhaseText` | `eamovrlprocsubphasedesc` | `CHAR(40)` | Description of Overall Process Subphase |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDPROCSUBORDDPHASETXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDPROCSUBORDDPHASETXT')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Maint Order Process Sub Phase - Txt'
@ObjectModel.dataCategory: #TEXT
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #MIXED
}
@VDM.viewType: #BASIC
define view entity I_MaintOrdProcSuborddPhaseTxt
  as select from            eam_ostat_ph_sph as _Phase
    left outer to many join eam_ostat_sph_t  as _PhaseText on _Phase.eamovrlprocsubphase = _PhaseText.eamovrlprocsubphase



{
  key cast( _Phase.eamovrlprocphase as pm_phase ) as MaintenanceProcessingPhase,
  key _Phase.eamovrlprocsubphase                  as MaintOrdProcessSubPhaseCode,
  key _Phase.entity_type                          as EAMOverallStatusEntity,
      @Semantics.language:true
  key _PhaseText.language                         as Language,
      @Semantics.text: true
      _PhaseText.eamovrlprocsubphasedesc          as MaintOrdProcessSubPhaseCodeTxt
}
```
