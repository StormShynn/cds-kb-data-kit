---
name: I_BUSPARTINDUSTRYCODE
description: "Business PartnerINDUSTRYCODE"
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - business-partner
  - component:LO-MD-BP-2CL
  - lob:Logistics General
---
# I_BUSPARTINDUSTRYCODE

**Business PartnerINDUSTRYCODE**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartnerIndustryCode` | ✓ | |  | `braco` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusPartIndustryCodeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'INDUSTRYCODE'
@Search.searchable: true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.sapObjectNodeType.name: 'BusinessPartnerIndustryCode'
@ObjectModel.representativeKey: 'BusinessPartnerIndustryCode'
@ObjectModel: {
modelingPattern: #ANALYTICAL_DIMENSION,
supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                         #EXTRACTION_DATA_SOURCE,
                         #ANALYTICAL_DIMENSION,
                         #CDS_MODELING_ASSOCIATION_TARGET]
} 
@EndUserText.label: 'Business Partner Industry Code'
@Metadata.ignorePropagatedAnnotations:true
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
       enabled: true,
       delta.changeDataCapture: { automatic : true }
      },
    internalName:#LOCAL
}
define view I_BusPartIndustryCode
  as select from tbrc as BusinessPartnerIndustryCode
  association [0..*] to I_BusPartIndustryCodeText as _Text on $projection.BusinessPartnerIndustryCode = _Text.BusinessPartnerIndustryCode

{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Consumption.filter.hidden: true
      @EndUserText.label: 'Industry Code'
  key braco as BusinessPartnerIndustryCode,
      _Text
}
```
