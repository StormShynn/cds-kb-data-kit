---
name: I_BOMGROUPLINKSDEX
description: "Bomgrouplinksdex"
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_BOMGROUPLINKSDEX

**Bomgrouplinksdex**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BOMLinkUUID` | ✓ | |  |  |  |  |
| `BOMGroupUUID` |  | |  |  |  |  |
| `BillOfMaterialCategory` |  | |  |  |  |  |
| `BillOfMaterial` |  | |  |  |  |  |
| `BillOfMaterialVariant` |  | |  |  |  |  |
| `BillOfMaterialVersion` |  | |  |  |  |  |
| `BillOfMaterialItemNodeNumber` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Data extaction for Bom Group links'
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #MIXED}
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]


@Analytics:{
    dataCategory: #FACT,
    dataExtraction: {
        enabled:true,
        delta.changeDataCapture: {
          mapping:
          [ { table: 'stgobomlink',
              role: #MAIN,
              viewElement: [ 'BOMLinkUUID' ],
              tableElement: [ 'linkid' ] }


          ]
        }
    }
}
@Analytics.technicalName: 'IBOMGRPLINKDEX'
@ObjectModel.sapObjectNodeType.name : 'BillOfMaterialGroup'

define view entity I_BOMGroupLinksDEX
  as select from I_BOMGroupLinks
{
      @Semantics.uuid: true
  key BOMLinkUUID,
      @Semantics.uuid: true
      BOMGroupUUID,
      BillOfMaterialCategory,
      BillOfMaterial,
      BillOfMaterialVariant,
      BillOfMaterialVersion,
      BillOfMaterialItemNodeNumber
}
```
