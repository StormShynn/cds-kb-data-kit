---
name: I_ALLOCATIONFREQUENCYCODE
description: "Allocation Frequency Code"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ALLOCATIONFREQUENCYCODE')/$value
semantic_en: "Allocation Frequency Code"
semantic_vi: "Allocation Frequency Code — CDS view giao diện dựa trên dd07l."
keywords:
  - "allocation"
  - "frequency"
  - "code"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_ALLOCATIONFREQUENCYCODE

**Allocation Frequency Code**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ALLOCATIONFREQUENCYCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AllocationFrequency` | ✓ | |  | `cast( domvalue_l as oiu_freq_cd )` | `CHAR(1)` | Frequency |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AllocationFrequencyText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ALLOCATIONFREQUENCYCODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ALLOCATIONFREQUENCYCODE')/$value)*

```abap
@EndUserText.label: 'Allocation Frequency Code'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVALLOCFRQCYCD'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'AllocationFrequency'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name: 'PRAAllocationFrequencyCode'

define view I_AllocationFrequencyCode
  as select from dd07l
  association [0..*] to I_AllocationFrequencyText as _Text on $projection.AllocationFrequency = _Text.AllocationFrequency
{
      @ObjectModel.text.association: '_Text'
  key cast( domvalue_l as oiu_freq_cd ) as AllocationFrequency,
      _Text
}
where
      domname  = 'OIU_FREQ_CD'
  and as4local = 'A';
```
