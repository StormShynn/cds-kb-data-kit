---
name: I_MKTDATACREDITSPREADCUBE
description: "This CDS view provides the prerequisites for answering the following business question: What is a credit spread for a quotation type in basis points at a specific point in time?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATACREDITSPREADCUBE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: What is a credit spread for a quotation type in basis points at a specific point in time?"
semantic_vi: "Credit Spread Value - Cube — CDS view giao diện dựa trên I_CreditSpread."
keywords:
  - "credit"
  - "spread"
  - "value"
  - "cube"
  - "treasury"
  - "reference"
  - "entity"
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
# I_MKTDATACREDITSPREADCUBE

**This CDS view provides the prerequisites for answering the following business question: What is a credit spread for a quotation type in basis points at a specific point in time?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATACREDITSPREADCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TreasuryReferenceEntity` | ✓ | |  |  | `CHAR(15)` | Reference Entity |
| `CreditSpreadID` | ✓ | |  |  | `CHAR(15)` | Credit Spread ID |
| `CalendarDate` | ✓ | |  | `cast(CreditSpread.SpreadQuotationDate as calendardate)` | `DATS(8)` | Calendar Date |
| `SpreadQuotationType` | ✓ | |  |  | `NUMC(1)` | Quotation Type |
| `CreditSpreadValue` |  | |  |  | `DEC(17)` | Credit Spread Value in Basis Points |
| `_CreditSpreadIDVH` | | ✓ | | | | |
| `_ReferenceEntityVH` | | ✓ | | | | |
| `_CalendarDate` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreditSpreadIDVH` | `I_CreditSpreadID` | [1..1] |
| `_ReferenceEntityVH` | `I_ReferenceEntity` | [1..1] |
| `_CalendarDate` | `I_CalendarDate` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATACREDITSPREADCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATACREDITSPREADCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICRESPRCUBE'
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
//@ObjectModel.representativeKey: 'CreditSpreadID'
@Metadata.allowExtensions:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #L
@EndUserText.label: 'Credit Spread Value - Cube'

define view I_MktDataCreditSpreadCube
  as select from I_CreditSpread as CreditSpread
  association [1..1] to I_CreditSpreadID  as _CreditSpreadIDVH  on _CreditSpreadIDVH.CreditSpreadID = $projection.CreditSpreadID
  association [1..1] to I_ReferenceEntity as _ReferenceEntityVH on _ReferenceEntityVH.TreasuryReferenceEntity = $projection.TreasuryReferenceEntity
  association [1..1] to I_CalendarDate    as _CalendarDate      on _CalendarDate.CalendarDate = $projection.CalendarDate
{

      @ObjectModel.foreignKey.association: '_ReferenceEntityVH'
  key TreasuryReferenceEntity,

      @ObjectModel.foreignKey.association: '_CreditSpreadIDVH'
  key CreditSpreadID,

      @ObjectModel.foreignKey.association: '_CalendarDate'
  key cast(CreditSpread.SpreadQuotationDate as calendardate)              as CalendarDate,

  key CreditSpread.SpreadQuotationType                                    as SpreadQuotationType,

      CreditSpreadValue,


      //_csprd_def,
      //_ref_ent_def,
      _CreditSpreadIDVH,
      _ReferenceEntityVH,
      _CalendarDate

}
```
