---
name: I_MARKETIDENTCODE
description: "Market Identifier Code"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARKETIDENTCODE')/$value
semantic_en: "Market Identifier Code"
semantic_vi: "Market Identifier Code — CDS view giao diện dựa trên tbac_mic."
keywords:
  - "market"
  - "identifier"
  - "code"
  - "location"
tags:
  - LO
  - bo:companycode
  - component:LO-CMM-BF
  - interface-view
  - LO-CMM
  - LO-CMM-BF
  - lob:logistics general
  - lob:sourcing & procurement
---
# I_MARKETIDENTCODE

**Market Identifier Code**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARKETIDENTCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MarketIdentifierCode` | ✓ | |  | `mic` | `CHAR(4)` | Market Identifier Code |
| `Location` |  | |  | `cast ( location as ort01 )` | `CHAR(25)` | City |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `i_MarketIdentifierCodeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARKETIDENTCODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARKETIDENTCODE')/$value)*

```abap
@EndUserText.label: 'Market Identifier Code'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED  //or #CHECK
@AbapCatalog.sqlViewName: 'IMKTIDTCODE'
@ObjectModel.representativeKey: 'MarketIdentifierCode'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION]

define view I_MarketIdentCode
   as select from tbac_mic

   association [0..*] to i_MarketIdentifierCodeText as _Text
      on $projection.MarketIdentifierCode = _Text.MarketIdentifierCode
{
 @ObjectModel.text.association: '_Text'

   key mic as MarketIdentifierCode,
       cast (  location as ort01 ) as Location,
       _Text
  
}
```
