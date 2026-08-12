---
name: C_LISTINGCONDITION_2
description: "This CDS view retrieves information about the time period in which a specific retail site is allowed to procure a specific product. This CDS view provides the data to answer the following business questions: Is my retail site allowed to order a specific product next month? In which time period is my retail site allowed to order this product? Can this product currently be ordered by this retail site? When was it possible for a specific retail site to order a specific product in the past? Is a specific product listed in a specific retail site through a promotion, an allocation table, or an assortment module? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-RFM-MD-LST-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LISTINGCONDITION_2')/$value
semantic_en: "This CDS view retrieves information about the time period in which a specific retail site is allowed to procure a specific product. This CDS view provides the data to answer the following business questions: Is my retail site allowed to order a specific product next month? In which time period is my retail site allowed to order this product? Can this product currently be ordered by this retail site? When was it possible for a specific retail site to order a specific product in the past? Is a specific product listed in a specific retail site through a promotion, an allocation table, or an assortment module? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Retail Listing Condition — CDS view tiêu dùng dựa trên I_ListingCondition."
keywords:
  - "retail"
  - "listing"
  - "condition"
  - "site"
  - "customer"
  - "product"
  - "date"
  - "sequence"
  - "number"
  - "start"
tags:
  - LO
  - bo:companycode
  - component:LO-RFM-MD-LST-2CL
  - consumption-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-LST
  - LO-RFM-MD-LST-2CL
  - lob:logistics general
  - order
  - product
---
# C_LISTINGCONDITION_2

**This CDS view retrieves information about the time period in which a specific retail site is allowed to procure a specific product. This CDS view provides the data to answer the following business questions: Is my retail site allowed to order a specific product next month? In which time period is my retail site allowed to order this product? Can this product currently be ordered by this retail site? When was it possible for a specific retail site to order a specific product in the past? Is a specific product listed in a specific retail site through a promotion, an allocation table, or an assortment module? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-LST-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LISTINGCONDITION_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SiteCustomer` | ✓ | |  | `cast( Listing.Assortment as rfm_asm_site_to_others_ui preserving type )` | `CHAR(10)` | Customer Number of Site |
| `Product` | ✓ | |  | `cast (Listing.Product as productnumber preserving type )` | `CHAR(40)` | Product |
| `ListingConditionEndDate` | ✓ | |  | `cast ( Listing.ListingConditionEndDate as rfm_asm_valid_to preserving type )` | `DATS(8)` | Valid To |
| `SequenceNumber` | ✓ | |  |  | `NUMC(3)` | Sequence Number |
| `ListingConditionStartDate` |  | |  | `cast ( Listing.ListingConditionStartDate as rfm_asm_valid_from preserving type )` | `DATS(8)` | Valid From |
| `LastChangeDate` |  | |  | `cast( Listing.LastChangeDate as rfm_asm_last_change_date preserving type )` | `DATS(8)` | Changed On |
| `ListingSource` |  | |  |  | `CHAR(1)` | Listing Source (Transaction / Function Environment) |
| `ProductOfSuprordLstgCondition` |  | |  |  | `CHAR(40)` | Structured Material |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LISTINGCONDITION_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LISTINGCONDITION_2')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Retail Listing Condition'

@VDM.viewType: #CONSUMPTION

@ObjectModel: {
    usageType.serviceQuality: #C,
    usageType.sizeCategory: #XL,
    usageType.dataClass: #MASTER,
    supportedCapabilities:[#SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE]
}
@Metadata.ignorePropagatedAnnotations:true
define root view entity C_ListingCondition_2
  as select from I_ListingCondition as Listing
{
  key cast( Listing.Assortment as rfm_asm_site_to_others_ui preserving type )          as SiteCustomer,
  key cast (Listing.Product as productnumber preserving type )                         as Product,
      @Semantics.businessDate.to: true
  key cast ( Listing.ListingConditionEndDate as rfm_asm_valid_to preserving type )     as ListingConditionEndDate,
  key Listing.SequenceNumber                                                           as SequenceNumber,
      @Semantics.businessDate.from: true
      cast ( Listing.ListingConditionStartDate as rfm_asm_valid_from preserving type ) as ListingConditionStartDate,
      @Semantics.systemDate.lastChangedAt: true
      cast( Listing.LastChangeDate as rfm_asm_last_change_date preserving type )       as LastChangeDate,
      Listing.ListingSource                                                            as ListingSource,
      Listing.ProductOfSuprordLstgCondition                                            as ProductOfSuprordLstgCondition
}
```
