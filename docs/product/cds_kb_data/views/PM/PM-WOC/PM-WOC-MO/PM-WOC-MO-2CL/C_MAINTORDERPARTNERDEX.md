---
name: C_MAINTORDERPARTNERDEX
description: "Maintenance Order Partner"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDERPARTNERDEX')/$value
semantic_en: "Maintenance Order Partner"
semantic_vi: "Maintenance Order Partner — CDS view tiêu dùng dựa trên I_PlantMaintenancePartner."
keywords:
  - "maintenance"
  - "order"
  - "partner"
  - "maint"
  - "object"
  - "internal"
  - "function"
  - "number"
  - "category"
tags:
  - PM
  - component:PM-WOC-MO-2CL
  - consumption-view
  - lob:plant maintenance
  - order
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
---
# C_MAINTORDERPARTNERDEX

**Maintenance Order Partner**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDERPARTNERDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintObjectInternalID` | ✓ | |  |  | `CHAR(22)` | Object Number |
| `PartnerFunction` | ✓ | |  |  | `CHAR(2)` | Partner Function |
| `MaintenancePartnerObjectNumber` | ✓ | |  |  | `NUMC(6)` | Counter for differentiation 6-digit |
| `MaintenanceOrder` |  | |  |  | `CHAR(12)` | Order Number |
| `MaintObjectCategory` |  | |  |  | `CHAR(3)` | Object Category |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time at Which Record Was Added |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Time of Change |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `MaintenancePartner` |  | |  |  | `CHAR(12)` | Partner |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDERPARTNERDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDERPARTNERDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl: { 
 authorizationCheck: #MANDATORY,
 personalData.blocking: #REQUIRED
}
@EndUserText.label: 'Maintenance Order Partner'
@Metadata.ignorePropagatedAnnotations: true

@VDM.viewType: #CONSUMPTION

@ObjectModel.sapObjectNodeType.name: 'MaintenanceOrderPartner'

@Analytics.dataExtraction: {
  enabled: true,
    delta.changeDataCapture: {
      mapping: [{
        role: #MAIN,
        table: 'ihpa',
        viewElement: [ 'MaintObjectInternalID', 'PartnerFunction', 'MaintenancePartnerObjectNumber' ],
        tableElement: [ 'objnr', 'parvw', 'counter' ]
      }]
    }

}

@ObjectModel: {
  usageType: {
    dataClass: #MIXED,
    sizeCategory: #XL,
    serviceQuality: #C
  },
  supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ],
  modelingPattern: #ANALYTICAL_FACT
}

define view entity C_MaintOrderPartnerDEX
  as select from I_PlantMaintenancePartner as Partner
    inner join   I_MaintenanceOrder        as MaintenanceOrder on MaintenanceOrder.MaintenanceOrderInternalID = Partner.MaintObjectInternalID
{
      /* start suppress warning shlporigin_not_inherited */
  key Partner.MaintObjectInternalID,
  key Partner.PartnerFunction,
  key Partner.MaintenancePartnerObjectNumber,
      MaintenanceOrder.MaintenanceOrder,
      Partner.MaintObjectCategory,
      @Semantics.user.createdBy: true
      Partner.CreatedByUser,
      @Semantics.systemDate.createdAt: true
      Partner.CreationDate,
      @Semantics.systemTime.createdAt: true
      Partner.CreationTime,
      @Semantics.user.lastChangedBy: true
      Partner.LastChangedByUser,
      @Semantics.systemTime.lastChangedAt: true
      Partner.LastChangeTime,
      @Semantics.systemDate.lastChangedAt: true
      Partner.LastChangeDate,
      Partner.MaintenancePartner,
      /* end suppress warning shlporigin_not_inherited */
      
      Partner._PartnerFunction
      /*Association*/
}
```
