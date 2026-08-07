---
name: I_BUSPARTINDUSTRYKEY
description: Business PartnerINDUSTRYKEY
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
  - component:AP-MD-BP-RAP
  - lob:Other
---
# I_BUSPARTINDUSTRYKEY

**Business PartnerINDUSTRYKEY**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IndustrySystemType` | ✓ | |  | `istype` | `CHAR(4)` | Industry System |
| `IndustrySector` | ✓ | |  | `ind_sector` | `CHAR(10)` | Industry |
| `_Text` | | ✓ | | | | |
| `_BusPartIndustrySystem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusPartIndustryKeyText` | [0..*] |
| `_BusPartIndustrySystem` | `I_BusPartIndustrySystem` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPINDKEY'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
 dataCategory: #DIMENSION,
 dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      automatic: true
      }
    }
  }
@ObjectModel.representativeKey:'IndustrySector'    
@VDM.viewType: #BASIC
@EndUserText.label: 'Business Partner Industry Key'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
  usageType.sizeCategory: #M,
  usageType.serviceQuality: #A,
  usageType.dataClass: #CUSTOMIZING,
  sapObjectNodeType.name: 'BusinessPartnerIndustrySector',
  modelingPattern: #NONE,
  supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ,
                           #EXTRACTION_DATA_SOURCE , #ANALYTICAL_DIMENSION ]
}
@Metadata.ignorePropagatedAnnotations: true
define view I_BusPartIndustryKey
  as select from tb038a
  association [0..*] to I_BusPartIndustryKeyText as _Text on  $projection.IndustrySector     = _Text.IndustrySector
                                                           and $projection.IndustrySystemType = _Text.IndustrySystemType
  association [0..1] to I_BusPartIndustrySystem  as _BusPartIndustrySystem on  $projection.IndustrySystemType = _BusPartIndustrySystem.IndustrySystemType                                                         
{
  @ObjectModel.foreignKey.association:'_BusPartIndustrySystem'
  key istype     as IndustrySystemType,
      @ObjectModel.text.association: '_Text'
  key ind_sector as IndustrySector,

      _Text,
      _BusPartIndustrySystem
}
```
