---
name: I_BUSPARTINDUSTRYKEYTEXT
description: Business PartnerINDUSTRYKEYTEXT
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
  - text-view
  - business-partner
  - text
  - component:AP-MD-BP-RAP
  - lob:Other
---
# I_BUSPARTINDUSTRYKEYTEXT

**Business PartnerINDUSTRYKEYTEXT**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `IndustrySystemType` | ✓ | |  | `istype` |  |  |
| `IndustrySector` | ✓ | |  | `ind_sector` |  |  |
| `IndustryKeyDescription` |  | |  | `text` |  |  |
| `_BusPartIndustryKey` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusPartIndustryKey` | `I_BusPartIndustryKey` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPINDKEYTEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@EndUserText.label: 'Business Partner Industry Key Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.dataExtraction.enabled: true
@ObjectModel: {
  representativeKey: 'IndustrySector',
  dataCategory: #TEXT,
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  usageType.dataClass: #CUSTOMIZING,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,
                            #EXTRACTION_DATA_SOURCE , #ANALYTICAL_DIMENSION ]
}
@Metadata.ignorePropagatedAnnotations: true

define view I_BusPartIndustryKeyText
  as select from tb038b
  association [0..1] to I_BusPartIndustryKey as _BusPartIndustryKey on $projection.IndustrySystemType = _BusPartIndustryKey.IndustrySystemType
                                                                    and $projection.IndustrySector = _BusPartIndustryKey.IndustrySector
                                                                
{
      @Semantics.language: true      
  key spras      as Language,
  @ObjectModel.foreignKey.association: '_BusPartIndustryKey'
  key istype     as IndustrySystemType,
  key ind_sector as IndustrySector,
      @Semantics.text: true
      text       as IndustryKeyDescription,
//      text_short as IndustryKeyShortDescription

  _BusPartIndustryKey
}
```
