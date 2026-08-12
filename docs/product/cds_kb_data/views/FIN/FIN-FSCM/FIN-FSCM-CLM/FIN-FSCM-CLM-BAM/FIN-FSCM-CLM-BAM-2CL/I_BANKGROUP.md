---
name: I_BANKGROUP
description: "This CDS view provides all business partners that represent banks with the business partner role Bank (TR0703). To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKGROUP')/$value
semantic_en: "This CDS view provides all business partners that represent banks with the business partner role Bank (TR0703). To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Bank Business Partner — CDS view giao diện dựa trên I_BusinessPartner."
keywords:
  - "bank"
  - "business"
  - "partner"
  - "name"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CLM-BAM-2CL
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - interface-view
  - lob:finance
---
# I_BANKGROUP

**This CDS view provides all business partners that represent banks with the business partner role Bank (TR0703). To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKGROUP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerName` |  | |  |  | `CHAR(81)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKGROUP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKGROUP')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBANKGROUP'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Bank Business Partner'
@VDM.viewType: #COMPOSITE
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.representativeKey: 'BusinessPartner'
@ClientHandling.algorithm : #SESSION_VARIABLE
@AccessControl.authorizationCheck:#CHECK
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: #SQL_DATA_SOURCE
@Search.searchable: true
@Consumption.ranked: true

define view I_BankGroup 
  as select from I_BusinessPartner            as BusinessPartner
    inner join   I_BusinessPartner_to_BP_Role as BusinessPartnerRole on  BusinessPartner.BusinessPartner         = BusinessPartnerRole.BusinessPartner
                                                                     and BusinessPartnerRole.BusinessPartnerRole = 'TR0703'                     
{
      @ObjectModel.text.element:  [ 'BusinessPartnerName' ]
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8 
  key BusinessPartner.BusinessPartner,  
      BusinessPartner.BusinessPartnerName
}
where BusinessPartner.IsMarkedForArchiving <> 'X'
```
