---
name: C_EQUIPMENTPARTNERDEX
description: Equipment Partner DEX
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EQUIPMENTPARTNERDEX')/$value
semantic_en: Equipment Partner DEX
semantic_vi: Equipment Partner DEX — CDS view tiêu dùng dựa trên I_Equipment.
keywords:
  - equipment
  - partner
  - dex
  - maint
  - object
  - internal
  - function
  - maintenance
  - number
  - category
tags:
  - PM
  - component:PM-EQM-EQ-2CL
  - consumption-view
  - lob:plant maintenance
  - lob:quality management
  - PM-EQM
  - PM-EQM-EQ
  - PM-EQM-EQ-2CL
---
# C_EQUIPMENTPARTNERDEX

**Equipment Partner DEX**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EQUIPMENTPARTNERDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintObjectInternalID` | ✓ | |  |  | `CHAR(22)` | Object Number |
| `PartnerFunction` | ✓ | |  |  | `CHAR(2)` | Partner Function |
| `MaintenancePartnerObjectNumber` | ✓ | |  |  | `NUMC(6)` | Counter for differentiation 6-digit |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `MaintObjectCategory` |  | |  |  | `CHAR(3)` | Object Category |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time at Which Record Was Added |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Time of Change |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `MaintenancePartner` |  | |  |  | `CHAR(12)` | Partner |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EQUIPMENTPARTNERDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EQUIPMENTPARTNERDEX')/$value)*

```abap
@EndUserText.label: 'Equipment Partner DEX'
@AccessControl: {
    authorizationCheck:      #MANDATORY,
    personalData.blocking:   #REQUIRED
    }
@ObjectModel: {
    supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ],
//    modelingPattern: #ANALYTICAL_DIMENSION,
    modelingPattern: #ANALYTICAL_FACT,
//    representativeKey: 'MaintenancePartnerObjectNumber',
    sapObjectNodeType.name: 'EquipmentPartner',
    usageType: {
       dataClass: #MASTER,
       serviceQuality: #C,
       sizeCategory: #XL
       }
    }
@Analytics: {
   internalName:#LOCAL,
//   dataCategory: #DIMENSION,
   dataCategory: #FACT,      
   dataExtraction: {
     enabled: true,
     delta.changeDataCapture: {
       mapping: [{ role: #MAIN, table: 'ihpa',
                   viewElement: [ 'MaintObjectInternalID', 'PartnerFunction', 'MaintenancePartnerObjectNumber' ],
                   tableElement: [ 'objnr', 'parvw', 'counter' ]
                }]
     }
   }
}
@VDM.viewType: #CONSUMPTION
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: true }
define view entity C_EquipmentPartnerDEX
  as select from I_Equipment               as Equipment 
  //    left outer to many join I_PlantMaintenancePartner as Partner   on Partner.MaintObjectInternalID = Equipment.MaintObjectInternalID
    inner join   I_PlantMaintenancePartner as Partner   on Partner.MaintObjectInternalID = Equipment.MaintObjectInternalID
{
      /* start suppress warning shlporigin_not_inherited */
  key Partner.MaintObjectInternalID,
  key Partner.PartnerFunction,
  key Partner.MaintenancePartnerObjectNumber,
      Equipment.Equipment,
      Partner.MaintObjectCategory,
      Partner.CreatedByUser,
      Partner.CreationDate,
      Partner.CreationTime,
      Partner.LastChangedByUser,
      Partner.LastChangeTime,
      Partner.LastChangeDate,
      Partner.MaintenancePartner,
      /* end suppress warning shlporigin_not_inherited */

      /* Associations */
      Partner._PartnerFunction
}
```
