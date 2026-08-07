---
name: I_BOMGROUPDEX
description: Bomgroupdex
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - interface-view
  - data-extraction
  - bom
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
---
# I_BOMGROUPDEX

**Bomgroupdex**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BOMGroupUUID` | ✓ | |  |  |
| `ParentBOMGroupUUID` |  | |  |  |
| `BOMGroupName` |  | |  |  |
| `BOMGroupDescription` |  | |  |  |
| `CreationDateTime` |  | |  |  |
| `BOMGroupLastChangedDateTime` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `LastChangedByUser` |  | |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Data extaction for Bom Groups'
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #MIXED}
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]


@Analytics:{
    dataCategory: #FACT,
    dataExtraction: {
        enabled:true,
        delta.changeDataCapture: {
          mapping:
          [ { table: 'stgo',
              role: #MAIN,
              viewElement: ['BOMGroupUUID'],
              tableElement: ['groupuuid' ] }


          ]
        }
    }
}
@Analytics.technicalName: 'IBOMGROUPDEX'
@ObjectModel.sapObjectNodeType.name : 'BillOfMaterialGroup'
define view entity I_BOMGroupDEX
  as select from I_BOMGroups
{
      @Semantics.uuid: true
  key BOMGroupUUID,
      @Semantics.uuid: true
      ParentBOMGroupUUID,
      BOMGroupName,
      BOMGroupDescription,
      CreationDateTime,
      BOMGroupLastChangedDateTime,
      CreatedByUser,
      LastChangedByUser
}
```
