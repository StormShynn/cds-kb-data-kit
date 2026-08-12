---
name: I_CHANGEMASTEROBJTYPEASSGMT
description: "This CDS view provides the prerequisites for answering the following business questions: To which business object types (for example material, document, characteristics) can a certain change master be assigned? Which change masters can be assigned to a certain object type? Are there any change masters for which the assignment of a specific object type is locked? Who has activated the assignment of a certain business object to a certain change master?"
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTEROBJTYPEASSGMT')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: To which business object types (for example material, document, characteristics) can a certain change master be assigned? Which change masters can be assigned to a certain object type? Are there any change masters for which the assignment of a specific object type is locked? Who has activated the assignment of a certain business object to a certain change master?"
semantic_vi: "Change Number Object Type Assignment — CDS view giao diện dựa trên aenv."
keywords:
  - "change"
  - "number"
  - "object"
  - "type"
  - "assignment"
  - "active"
  - "locked"
  - "changes"
  - "partially"
  - "displayed"
tags:
  - PLM
  - bo:companycode
  - component:PLM-WUI-OBJ-ECN-2CL
  - document
  - interface-view
  - material
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-ECN
  - PLM-WUI-OBJ-ECN-2CL
---
# I_CHANGEMASTEROBJTYPEASSGMT

**This CDS view provides the prerequisites for answering the following business questions: To which business object types (for example material, document, characteristics) can a certain change master be assigned? Which change masters can be assigned to a certain object type? Are there any change masters for which the assignment of a specific object type is locked? Who has activated the assignment of a certain business object to a certain change master?**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTEROBJTYPEASSGMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeNumber` | ✓ | |  | `aennr` | `CHAR(12)` | Change Number |
| `ChangeNumberObjectType` | ✓ | |  | `aetyp` | `NUMC(2)` | Object Type |
| `IsActiveForChangeNumber` |  | |  | `cast ( aeerl as /plmb/aeerl )` | `CHAR(1)` | Object Type Active for Change Number |
| `IsLockedForChanges` |  | |  | `aensp` | `CHAR(1)` | Indicator: Object type locked for changes |
| `IsPartiallyDisplayed` |  | |  | `tobja` | `CHAR(1)` | Indicator: display partial objects for object |
| `ObjMgmtRecdIsRequired` |  | |  | `cast ( indfl as /plmb/cc_indfl )` | `CHAR(1)` | Management Record Is Required for Each Object |
| `ObjMgmtRecdIsGenerated` |  | |  | `cast ( oigen as /plmb/oigen )` | `CHAR(1)` | Object Management Record Was Generated |
| `ObjMgmtRecdIsAutomlyCrted` |  | |  | `cast ( genan as /plmb/genan )` | `CHAR(1)` | Mgmt Record Generated Automatically Only for New Objects |
| `ObjMgmtRecdIsAutomlyCrtedByDlg` |  | |  | `cast ( gendi as /plmb/gendi )` | `CHAR(1)` | Automatic Generation with Dialog Box |
| `ObjectTypeCreationDate` |  | |  | `andat` | `DATS(8)` | Date record created on |
| `ObjectTypeCreatedByUser` |  | |  | `annam` | `CHAR(12)` | User who created record |
| `ObjectTypeLastChangedDate` |  | |  | `aedat` | `DATS(8)` | Date of Last Change |
| `ObjectTypeLastChangedByUser` |  | |  | `aenam` | `CHAR(12)` | Name of person who changed object |
| `_ChangeNumberObjectType` | | ✓ | | | | |
| `_ChangeMaster` | | ✓ | | | | |
| `_ChangeMstrObjTypeRevisionLvl` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChangeNumberObjectType` | `I_ChangeMasterObjectType` | [0..1] |
| `_ChangeMaster` | `I_ChangeMaster` | [1..1] |
| `_ChangeMstrObjTypeRevisionLvl` | `I_ChangeMstrObjTypeRevisionLvl` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTEROBJTYPEASSGMT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTEROBJTYPEASSGMT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IECNOBJASGMT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #CHECK

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.representativeKey: 'ChangeNumberObjectType'
@ObjectModel.semanticKey: ['ChangeNumber', 'ChangeNumberObjectType']

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE ]

@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MASTER

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API

@EndUserText.label: 'Change Number Object Type Assignment'
define view I_ChangeMasterObjTypeAssgmt
  as select from aenv
  association [0..1] to I_ChangeMasterObjectType       as _ChangeNumberObjectType       on $projection.ChangeNumberObjectType = _ChangeNumberObjectType.ChangeNumberObjectType
  association [1..1] to I_ChangeMaster                 as _ChangeMaster                 on $projection.ChangeNumber = _ChangeMaster.ChangeNumber
  association [0..*] to I_ChangeMstrObjTypeRevisionLvl as _ChangeMstrObjTypeRevisionLvl on $projection.ChangeNumberObjectType = _ChangeMstrObjTypeRevisionLvl.ChangeNumberObjectType
{
        @ObjectModel.foreignKey.association: '_ChangeMaster'
  key   aennr                            as ChangeNumber,
        @ObjectModel.foreignKey.association: '_ChangeNumberObjectType'
  key   aetyp                            as ChangeNumberObjectType,

        cast ( aeerl as /plmb/aeerl )    as IsActiveForChangeNumber,
        aensp                            as IsLockedForChanges,
        tobja                            as IsPartiallyDisplayed,
        cast ( indfl as /plmb/cc_indfl ) as ObjMgmtRecdIsRequired,
        cast ( oigen as /plmb/oigen )    as ObjMgmtRecdIsGenerated,
        cast ( genan as /plmb/genan )    as ObjMgmtRecdIsAutomlyCrted,
        cast ( gendi as /plmb/gendi )    as ObjMgmtRecdIsAutomlyCrtedByDlg,

        @Semantics.businessDate.at: true
        andat                            as ObjectTypeCreationDate,
        annam                            as ObjectTypeCreatedByUser,
        @Semantics.businessDate.at: true
        aedat                            as ObjectTypeLastChangedDate,
        aenam                            as ObjectTypeLastChangedByUser,

        _ChangeNumberObjectType,
        _ChangeMaster,
        _ChangeMstrObjTypeRevisionLvl
}
```
