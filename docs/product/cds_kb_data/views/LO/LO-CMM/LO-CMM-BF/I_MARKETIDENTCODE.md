---
name: I_MARKETIDENTCODE
description: "Market Identifier Code"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
