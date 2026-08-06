---
name: I_BUSINESSPARTNERGROUPING
description: Business PartnerGROUPING
app_component: AP-MD-BP-RAP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - business-partner
  - partner
  - component:AP-MD-BP-RAP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERGROUPING

**Business PartnerGROUPING**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BusinessPartnerGrouping` | `bu_group` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusinessPartnerGroupingText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPGROUPING'
@Search.searchable: true
@EndUserText.label: 'Business Partner Grouping'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true    
  }
}
@ObjectModel: {
  representativeKey: 'BusinessPartnerGrouping',
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  resultSet.sizeCategory: #XS,
  usageType.dataClass: #CUSTOMIZING,
  sapObjectNodeType.name: 'BusinessPartnerGrouping',
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}

@Metadata.ignorePropagatedAnnotations: true

define view I_BusinessPartnerGrouping 
  as select distinct from tb001
  association [0..*] to I_BusinessPartnerGroupingText as _Text on $projection.BusinessPartnerGrouping = _Text.BusinessPartnerGrouping 
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Consumption.filter.hidden: true
  key bu_group as BusinessPartnerGrouping,
      _Text    
} where tb001.xsuppress <> 'X'
```
