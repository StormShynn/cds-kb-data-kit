---
name: I_CHANGEMASTERALTDATE
description: "This CDS view provides the prerequisites for answering the following business questions: How many alternative dates have been defined for a given change master? What is the exact date value of an alternative date ID?"
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERALTDATE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: How many alternative dates have been defined for a given change master? What is the exact date value of an alternative date ID?"
semantic_vi: "Change Number Alternative Date — CDS view giao diện dựa trên aedt."
keywords:
  - "change"
  - "number"
  - "alternative"
  - "date"
  - "nmbr"
  - "counter"
  - "text"
tags:
  - PLM
  - bo:companycode
  - component:PLM-WUI-OBJ-ECN-2CL
  - interface-view
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-ECN
  - PLM-WUI-OBJ-ECN-2CL
---
# I_CHANGEMASTERALTDATE

**This CDS view provides the prerequisites for answering the following business questions: How many alternative dates have been defined for a given change master? What is the exact date value of an alternative date ID?**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERALTDATE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeNumber` | ✓ | |  | `aennr` | `CHAR(12)` | Change Number |
| `ChgNmbrAlternativeDateCounter` | ✓ | |  | `aedtz` | `NUMC(3)` | Engineering change management: alternative date counter |
| `ChgNmbrAlternativeDateID` |  | |  | `aedtn` | `CHAR(18)` | Alternative date external key |
| `ChgNmbrAlternativeDate` |  | |  | `datuv` | `DATS(8)` | Valid-From Date |
| `ChgNmbrAlternativeDateText` |  | |  | `aedtn` | `CHAR(18)` | Alternative date external key |
| `ChgNmbrAltvDateIsAssignedToObj` |  | |  | `cast ( aedto as /plmb/aedto preserving type )` | `CHAR(1)` | Objects Allocated |
| `_ChangeMaster` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChangeMaster` | `I_ChangeMaster` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERALTDATE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERALTDATE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IECNALTDATE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.semanticKey: ['ChangeNumber', 'ChgNmbrAlternativeDateCounter']

@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]

@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MASTER

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API

@EndUserText.label: 'Change Number Alternative Date'
define view I_ChangeMasterAltDate
  as select from aedt

  association [0..1] to I_ChangeMaster as _ChangeMaster on $projection.ChangeNumber = _ChangeMaster.ChangeNumber
{
      @ObjectModel.foreignKey.association: '_ChangeMaster'
  key aennr                                         as ChangeNumber,
  key aedtz                                         as ChgNmbrAlternativeDateCounter,
      aedtn                                         as ChgNmbrAlternativeDateID,
      datuv                                         as ChgNmbrAlternativeDate,
      aedtn                                         as ChgNmbrAlternativeDateText,
      cast ( aedto as /plmb/aedto preserving type ) as ChgNmbrAltvDateIsAssignedToObj,

      _ChangeMaster
}
```
