---
name: I_FISCALQUARTERTEXT
description: Fiscalquartertext
app_component: CA-GTF-GL-CAL
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-GL
  - interface-view
  - text-view
  - text
  - component:CA-GTF-GL-CAL
  - lob:Cross-Application Components
---
# I_FISCALQUARTERTEXT

**Fiscalquartertext**

| Property | Value |
|---|---|
| App Component | `CA-GTF-GL-CAL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast( dd07t.ddlanguage as spras preserving type )` |
| key `FiscalQuarter` | `cast ( dd07t.domvalue_l as fis_fiscal_quarter )` |
| `DomainValue` | `dd07t.domvalue_l` |
| `FiscalQuarterName` | `cast( dd07t.ddtext as fis_fiscal_quarter_name )` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Fiscal Quarter - Text'
@VDM.viewType: #BASIC

@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IFSCLQRTRTXT' 
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@ObjectModel.representativeKey: 'FiscalQuarter'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {dataExtraction.enabled: true}

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]

@Analytics.internalName: #LOCAL

define view entity I_FiscalQuarterText as select from dd07t

association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,
      @ObjectModel.text.element: ['FiscalQuarterName']
  key cast ( dd07t.domvalue_l as fis_fiscal_quarter ) as FiscalQuarter,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l as DomainValue,
      @Semantics.text: true
      cast( dd07t.ddtext as fis_fiscal_quarter_name ) as FiscalQuarterName,
      _Language
}
where dd07t.domname  = 'FIS_FISCAL_QUARTER' 
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
