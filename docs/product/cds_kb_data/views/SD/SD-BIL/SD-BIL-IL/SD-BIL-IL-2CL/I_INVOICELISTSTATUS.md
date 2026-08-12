---
name: I_INVOICELISTSTATUS
description: "Invoiceliststatus"
app_component: SD-BIL-IL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-IL
  - interface-view
  - status
  - component:SD-BIL-IL-2CL
  - lob:Sales & Distribution
---
# I_INVOICELISTSTATUS

**Invoiceliststatus**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InvoiceListStatus` | ✓ | |  | `cast(dd07l.domvalue_l as relik)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_InvoiceListStatusText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Analytics.technicalName: 'ISDINVCLSTSTS'

@EndUserText.label: 'Invoice List Status'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'InvoiceListStatus'
@ObjectModel.sapObjectNodeType.name: 'InvoiceListStatus'

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #VALUE_HELP_PROVIDER ]

@ObjectModel.usageType: { dataClass: #META, serviceQuality: #A, sizeCategory: #S }

@Search.searchable: true

@VDM.viewType: #BASIC

define view entity I_InvoiceListStatus
  as select from dd07l

  association [0..*] to I_InvoiceListStatusText as _Text on $projection.InvoiceListStatus = _Text.InvoiceListStatus

{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key cast(dd07l.domvalue_l as relik) as InvoiceListStatus,

      _Text
}

where (dd07l.domname = 'STATV') and (dd07l.as4local = 'A');
```
