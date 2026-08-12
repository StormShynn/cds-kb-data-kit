---
name: I_SITEVALNANDINVTRYMANAGEMENT
description: "This CDS view provides a structured way for you to access site valuation and inventory management data. This CDS view provides the data to answer the following business questions: Which site customer corresponds to a specific site location for inventory management? What is the profit center assigned to a site or customer? How are sites and customers associated for valuation and inventory purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEVALNANDINVTRYMANAGEMENT')/$value
semantic_en: "This CDS view provides a structured way for you to access site valuation and inventory management data. This CDS view provides the data to answer the following business questions: Which site customer corresponds to a specific site location for inventory management? What is the profit center assigned to a site or customer? How are sites and customers associated for valuation and inventory purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Site Valuation and inventory mgmt — CDS view giao diện dựa trên wrf1."
keywords:
  - "site"
  - "valuation"
  - "and"
  - "inventory"
  - "mgmt"
  - "customer"
  - "profit"
  - "center"
tags:
  - LO
  - bo:businesspartner
  - component:LO-RFM-MD-SIT-2CL
  - customer
  - interface-view
  - inventory
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-SIT
  - LO-RFM-MD-SIT-2CL
  - lob:logistics general
  - bo:plant
---
# I_SITEVALNANDINVTRYMANAGEMENT

**This CDS view provides a structured way for you to access site valuation and inventory management data. This CDS view provides the data to answer the following business questions: Which site customer corresponds to a specific site location for inventory management? What is the profit center assigned to a site or customer? How are sites and customers associated for valuation and inventory purposes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEVALNANDINVTRYMANAGEMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SiteCustomer` | ✓ | |  | `locnr` | `CHAR(10)` | Customer Number |
| `ProfitCenter` |  | |  | `prctr` | `CHAR(10)` | Profit Center |
| `_Site` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Site` | `I_Site` | [1..1] |
| `_Customer` | `I_Customer` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEVALNANDINVTRYMANAGEMENT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEVALNANDINVTRYMANAGEMENT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISTVALINVMGMT'

@AbapCatalog: {
  compiler.compareFilter: true,
  preserveKey: true
}

@AccessControl: {
    authorizationCheck: #NOT_REQUIRED,
    personalData.blocking: #NOT_REQUIRED
}

@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@ObjectModel: {
    semanticKey: ['SiteCustomer'],
    representativeKey: 'SiteCustomer',
    usageType: {
        serviceQuality: #A,
        sizeCategory: #M,
        dataClass: #MASTER
   }
}
@EndUserText.label: 'Site Valuation and inventory mgmt'
define view I_SiteValnAndInvtryManagement
  as select from wrf1
  association [1..1] to I_Site     as _Site     on $projection.SiteCustomer = _Site.SiteCustomer
  association [1..1] to I_Customer as _Customer on $projection.SiteCustomer = _Customer.Customer
{
  key locnr as SiteCustomer,
      prctr as ProfitCenter,
//      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _Site,
      _Customer
}
```
