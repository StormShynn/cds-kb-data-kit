---
name: I_SITEMASTERADMINISTRATIVEDATA
description: "This CDS view exposes site-related administrative fields for browsing and reporting purposes. This CDS view provides the data to answer the following business questions: Which site customer is assigned to a given site? Who performed the last change to site administrative data? When was the site administrative data last changed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEMASTERADMINISTRATIVEDATA')/$value
semantic_en: "This CDS view exposes site-related administrative fields for browsing and reporting purposes. This CDS view provides the data to answer the following business questions: Which site customer is assigned to a given site? Who performed the last change to site administrative data? When was the site administrative data last changed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Site Administrative Fields — CDS view giao diện dựa trên wrf1."
keywords:
  - "site"
  - "administrative"
  - "fields"
  - "customer"
  - "last"
  - "changed"
  - "user"
  - "change"
  - "date"
  - "time"
tags:
  - LO
  - bo:businesspartner
  - component:LO-RFM-MD-SIT-2CL
  - customer
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-SIT
  - LO-RFM-MD-SIT-2CL
  - lob:logistics general
  - bo:companycode
---
# I_SITEMASTERADMINISTRATIVEDATA

**This CDS view exposes site-related administrative fields for browsing and reporting purposes. This CDS view provides the data to answer the following business questions: Which site customer is assigned to a given site? Who performed the last change to site administrative data? When was the site administrative data last changed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEMASTERADMINISTRATIVEDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SiteCustomer` | ✓ | |  | `locnr` | `CHAR(10)` | Customer Number |
| `LastChangedByUser` |  | |  | `lastchangedbyuser` | `CHAR(12)` | User Who Last Changed the Business Document |
| `LastChangeDateTime` |  | |  | `lastchangedatetime` | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEMASTERADMINISTRATIVEDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEMASTERADMINISTRATIVEDATA')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISTADMINFLDS'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Site Administrative Fields'
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@AccessControl.personalData.blocking: #REQUIRED
@ObjectModel: {
   usageType: {
     dataClass:      #MIXED,
     sizeCategory:   #M,
     serviceQuality: #C
   }
}
define view I_SiteMasterAdministrativeData
  as select from wrf1
{
  key locnr              as SiteCustomer,
//      erdat              as CreationDateTime,
//      ernam              as CreatedByUser,
      lastchangedbyuser  as LastChangedByUser,
      lastchangedatetime as LastChangeDateTime
}
```
