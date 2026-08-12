---
name: I_ASSGMTEXCHMKTIDFRCODE
description: "Assignment of Exchange to Market Identifier Code"
app_component: CA-GTF-TRB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
