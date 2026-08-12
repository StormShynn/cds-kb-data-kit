---
name: I_MKTDATABASISSPREADCUBE
description: "This CDS view provides the prerequisites for answering the following business questions: What is a basis spread for a quotation type in basis points at a specific point in time?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
