---
name: I_BILLOFMATERIALSTATUS
description: "Bill of MaterialSTATUS"
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
  - material
  - bill-of-material
  - status
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
---
# I_BILLOFMATERIALSTATUS

**Bill of MaterialSTATUS**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfMaterialStatus` | ✓ | |  | `stlst` |  |  |
| `_BillOfMaterialStatusText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfMaterialStatusText` | `I_BillOfMaterialStatusText` | [0..*] |

## Source Code

```abap
@Search.searchable: true
@VDM.viewType: #BASIC
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #L, dataClass: #MASTER}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Bill Of Material Status'
@ObjectModel.representativeKey: 'BillOfMaterialStatus'
@Analytics.technicalName: 'IBOMSTATUS'
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [  #CDS_MODELING_ASSOCIATION_TARGET, 
                                       #SQL_DATA_SOURCE, 
                                       #CDS_MODELING_DATA_SOURCE, 
                                       #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'BillOfMaterialStatus'
define view entity I_BillOfMaterialStatus as select from t415s as t415s
association [0..*] to I_BillOfMaterialStatusText as _BillOfMaterialStatusText
        on $projection.BillOfMaterialStatus = _BillOfMaterialStatusText.BillOfMaterialStatus


 {
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      @ObjectModel.text.association: '_BillOfMaterialStatusText'
         
  key t415s.stlst as BillOfMaterialStatus ,

  _BillOfMaterialStatusText
    
}
```
