---
name: I_MKTDATABASISSPREADCUBE
description: "This CDS view provides the prerequisites for answering the following business questions: What is a basis spread for a quotation type in basis points at a specific point in time?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATABASISSPREADCUBE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is a basis spread for a quotation type in basis points at a specific point in time?"
semantic_vi: "Basis Spread Value - Cube — CDS view giao diện dựa trên I_MktDataBasisSpread."
keywords:
  - "basis"
  - "spread"
  - "value"
  - "cube"
  - "data"
  - "calendar"
  - "date"
  - "quotation"
  - "type"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - quotation
---
# I_MKTDATABASISSPREADCUBE

**This CDS view provides the prerequisites for answering the following business questions: What is a basis spread for a quotation type in basis points at a specific point in time?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATABASISSPREADCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MktDataBasisSpreadID` | ✓ | |  |  | `CHAR(15)` | Basis Spread ID |
| `CalendarDate` | ✓ | |  | `cast ( SpreadQuotationDate as calendardate )` | `DATS(8)` | Calendar Date |
| `SpreadQuotationType` | ✓ | |  |  | `NUMC(1)` | Quotation Type |
| `MktDataBasisSpreadValue` |  | |  |  | `DEC(17)` | Basis Spread Value in Basis Points |
| `_BasisSpreadID` | | ✓ | | | | |
| `_CalendarDate` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BasisSpreadID` | `I_MktDataBasisSpreadID` | [1..1] |
| `_CalendarDate` | `I_CalendarDate` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATABASISSPREADCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATABASISSPREADCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBASSPRCUBE'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Analytics.dataCategory: #CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_CUBE ]
@Metadata.ignorePropagatedAnnotations:true 
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #COMPOSITE
@AbapCatalog.preserveKey:true
@Analytics.internalName:#LOCAL 
@Metadata.allowExtensions:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #L
@EndUserText.label: 'Basis Spread Value - Cube'

define view I_MktDataBasisSpreadCube
        as select from I_MktDataBasisSpread as BasisSpread 
           association [1..1] to I_MktDataBasisSpreadID  as _BasisSpreadID  on _BasisSpreadID.MktDataBasisSpreadID = $projection.MktDataBasisSpreadID
           association [1..1] to I_CalendarDate          as _CalendarDate   on _CalendarDate.CalendarDate          = $projection.CalendarDate
{
    @ObjectModel.foreignKey.association: '_BasisSpreadID'
    key MktDataBasisSpreadID,
    @ObjectModel.foreignKey.association: '_CalendarDate'
    key cast ( SpreadQuotationDate as calendardate ) as CalendarDate, 
    key SpreadQuotationType,
        MktDataBasisSpreadValue, 

        _BasisSpreadID,
        _CalendarDate
    
}
```
