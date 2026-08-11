---
name: I_ASSGMTEXCHMKTIDFRCODE
description: "Assignment of Exchange to Market Identifier Code"
app_component: CA-GTF-TRB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSGMTEXCHMKTIDFRCODE')/$value
semantic_en: "Assignment of Exchange to Market Identifier Code"
semantic_vi: "Assignment of Exchange to Market Identifier Code — CDS view giao diện dựa trên tbact_mic_handpl."
keywords:
  - "assignment"
  - "exchange"
  - "market"
  - "identifier"
  - "code"
  - "security"
tags:
  - CA
  - bo:companycode
  - CA-GTF
  - CA-GTF-TRB
  - component:CA-GTF-TRB
  - interface-view
  - lob:cross_application components
---
# I_ASSGMTEXCHMKTIDFRCODE

**Assignment of Exchange to Market Identifier Code**

| Property | Value |
|---|---|
| App Component | `CA-GTF-TRB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSGMTEXCHMKTIDFRCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MarketIdentifierCode` | ✓ | |  | `mic` | `CHAR(4)` | Market Identifier Code |
| `SecurityExchange` |  | |  | `rhandpl` | `CHAR(10)` | Exchange |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSGMTEXCHMKTIDFRCODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSGMTEXCHMKTIDFRCODE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IASSGEXCHMKTCODE'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true, internalName:#LOCAL }
@AbapCatalog: { compiler.compareFilter: true, preserveKey:true }
@Metadata: { ignorePropagatedAnnotations:true, allowExtensions:true }
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'MarketIdentifierCode'
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@EndUserText.label: 'Assignment of Exchange to Market Identifier Code'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION]
define view I_AssgmtExchMktIdfrCode as select from tbact_mic_handpl 
{
key mic       as MarketIdentifierCode, 
    rhandpl   as SecurityExchange
}
```
