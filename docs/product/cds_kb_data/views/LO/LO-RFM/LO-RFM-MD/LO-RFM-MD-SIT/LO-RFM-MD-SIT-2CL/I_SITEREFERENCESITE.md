---
name: I_SITEREFERENCESITE
description: "This CDS view provides information about the assignment of reference sites in the system. You can use it to determine which site (plant) is assigned as a reference site for specific combinations of sales organization and distribution channel. This CDS view provides the data to answer the following business questions: Which site (such as a plant or store) is assigned to which reference site? Is a particular site considered a reference site itself? What is the reference site for a site in a given sales organization and distribution channel? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEREFERENCESITE')/$value
semantic_en: "This CDS view provides information about the assignment of reference sites in the system. You can use it to determine which site (plant) is assigned as a reference site for specific combinations of sales organization and distribution channel. This CDS view provides the data to answer the following business questions: Which site (such as a plant or store) is assigned to which reference site? Is a particular site considered a reference site itself? What is the reference site for a site in a given sales organization and distribution channel? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Site Reference Site Assignment — CDS view giao diện dựa trên P_SiteReferenceSite."
keywords:
  - "site"
  - "reference"
  - "assignment"
  - "sales"
  - "organization"
  - "distribution"
  - "channel"
tags:
  - LO
  - bo:companycode
  - component:LO-RFM-MD-SIT-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-SIT
  - LO-RFM-MD-SIT-2CL
  - lob:logistics general
  - plan
  - bo:plant
---
# I_SITEREFERENCESITE

**This CDS view provides information about the assignment of reference sites in the system. You can use it to determine which site (plant) is assigned as a reference site for specific combinations of sales organization and distribution channel. This CDS view provides the data to answer the following business questions: Which site (such as a plant or store) is assigned to which reference site? Is a particular site considered a reference site itself? What is the reference site for a site in a given sales organization and distribution channel? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEREFERENCESITE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Site` | ✓ | |  |  | `CHAR(4)` | Plant |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `ReferenceSite` |  | |  | `cast(case when ReferenceDistributionCenter = '' then ReferenceStore else ReferenceDistributionCenter end as referencesite preserving type)` | `CHAR(4)` | Reference Site |
| `IsReferenceSite` |  | |  | `cast(case when IsReferenceDistributionCenter = '' then IsReferenceStore else IsReferenceDistributionCenter end as boole_d preserving type)` | `CHAR(1)` | Data element for domain BOOLE: TRUE (='X') and FALSE (=' ') |
| `_Site` | | ✓ | | | | |
| `_ReferenceSite` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Site` | `I_Site` | [1..1] |
| `_ReferenceSite` | `I_Site` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEREFERENCESITE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEREFERENCESITE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISITERFRNCSITE'
@EndUserText.label: 'Site Reference Site Assignment'

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@AccessControl: {
    authorizationCheck: #CHECK,
    personalData.blocking: #NOT_REQUIRED
}

@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@ObjectModel: {
    representativeKey: 'Site',
    usageType: {
        serviceQuality: #A,
        sizeCategory: #M,
        dataClass: #MASTER
   }
}

define view I_SiteReferenceSite
  as select from P_SiteReferenceSite
  association [1..1] to I_Site as _Site          on $projection.Site = _Site.Site
  association [0..1] to I_Site as _ReferenceSite on $projection.ReferenceSite = _ReferenceSite.Site
{
  key Site,

      SalesOrganization,
      DistributionChannel,

      @ObjectModel.foreignKey.association: '_ReferenceSite'
      cast(case when ReferenceDistributionCenter = '' then ReferenceStore else ReferenceDistributionCenter end as referencesite preserving type)           as ReferenceSite,
      cast(case when IsReferenceDistributionCenter = '' then IsReferenceStore else IsReferenceDistributionCenter end as boole_d preserving type)           as IsReferenceSite,

      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _Site,
      _ReferenceSite
}
```
