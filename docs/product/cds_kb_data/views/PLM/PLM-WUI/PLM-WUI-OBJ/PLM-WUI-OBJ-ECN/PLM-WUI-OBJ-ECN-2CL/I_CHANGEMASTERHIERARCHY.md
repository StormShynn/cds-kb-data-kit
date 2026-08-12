---
name: I_CHANGEMASTERHIERARCHY
description: "This CDS view provides the prerequisites for answering the following business question: Which change masters belong together, for example because they are part of the same complex change process?"
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERHIERARCHY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: Which change masters belong together, for example because they are part of the same complex change process?"
semantic_vi: "Change Number Hierarchy — CDS view giao diện dựa trên aehi."
keywords:
  - "change"
  - "number"
  - "hierarchy"
  - "package"
  - "leading"
  - "lead"
  - "creation"
  - "date"
  - "created"
  - "user"
tags:
  - PLM
  - bo:plant
  - component:PLM-WUI-OBJ-ECN-2CL
  - interface-view
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-ECN
  - PLM-WUI-OBJ-ECN-2CL
---
# I_CHANGEMASTERHIERARCHY

**This CDS view provides the prerequisites for answering the following business question: Which change masters belong together, for example because they are part of the same complex change process?**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERHIERARCHY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PackageChangeNumber` | ✓ | |  | `aechi` | `CHAR(12)` | Change package |
| `LeadingChangeNumber` |  | |  | `aepar` | `CHAR(12)` | Leading change master record |
| `LeadChangeNumberCreationDate` |  | |  | `andat` | `DATS(8)` | Date record created on |
| `LeadChangeNumberCreatedByUser` |  | |  | `annam` | `CHAR(12)` | User who created record |
| `_LeadingChangeMaster` | | ✓ | | | | |
| `_PackageChangeMaster` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LeadingChangeMaster` | `I_ChangeMaster` | [0..1] |
| `_PackageChangeMaster` | `I_ChangeMaster` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERHIERARCHY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERHIERARCHY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IECNHIERARCHY'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.representativeKey: 'PackageChangeNumber'
@ObjectModel.semanticKey: [ 'PackageChangeNumber' ]

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE ]

@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MASTER

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API

@EndUserText.label: 'Change Number Hierarchy'
define view I_ChangeMasterHierarchy

  as select from aehi
  association [0..1] to I_ChangeMaster as _LeadingChangeMaster on $projection.LeadingChangeNumber = _LeadingChangeMaster.ChangeNumber
  association [0..1] to I_ChangeMaster as _PackageChangeMaster on $projection.PackageChangeNumber = _PackageChangeMaster.ChangeNumber
{
      @ObjectModel.foreignKey.association: '_PackageChangeMaster'
  key aechi as PackageChangeNumber,

      @ObjectModel.foreignKey.association: '_LeadingChangeMaster'
      aepar as LeadingChangeNumber,

      andat as LeadChangeNumberCreationDate,
      annam as LeadChangeNumberCreatedByUser,

      _LeadingChangeMaster,
      _PackageChangeMaster
}
```
