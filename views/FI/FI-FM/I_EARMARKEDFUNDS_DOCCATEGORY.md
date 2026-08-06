---
name: I_EARMARKEDFUNDS_DOCCATEGORY
description: Earmarkedfunds Doccategory
app_component: FI-FM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-FM
  - interface-view
  - component:FI-FM
  - lob:Finance
---
# I_EARMARKEDFUNDS_DOCCATEGORY

**Earmarkedfunds Doccategory**

| Property | Value |
|---|---|
| App Component | `FI-FM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `EarmarkedFundsDocumentCategory` | `cast ( cast ( substring( domvalue_l, 1, 3 ) as abap.numc( 3 ) ) as fmis_efd_doccategory preserving type )` |
| `DomainValue` | `dd07l.domvalue_l` |
| `_Text` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: true,
    internalName: #LOCAL,
    technicalName: 'IEFDOCCATEGORY'
  }
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER,
                                     #EXTRACTION_DATA_SOURCE,
                                     #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel: {
    usageType: {
        dataClass: #META,
        serviceQuality: #A,
        sizeCategory: #S
      },
    representativeKey: 'EarmarkedFundsDocumentCategory',
    sapObjectNodeType.name: 'EarmarkedFundsDocumentCategory',
    dataCategory: #VALUE_HELP,
    resultSet.sizeCategory: #XS,
    modelingPattern: #VALUE_HELP_PROVIDER
  }
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Earmarked Funds Document Category'
define root view entity I_EarmarkedFunds_DocCategory
  as select from dd07l
  composition [0..*] of I_EarmarkedFunds_DocCatText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast ( cast ( substring( domvalue_l, 1, 3 ) as abap.numc( 3 ) ) as fmis_efd_doccategory preserving type ) as EarmarkedFundsDocumentCategory,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                                          as DomainValue,

      _Text
}

where
      domname       = 'KBLTYP'
  and as4local      = 'A'
  and dd07l.as4vers = '0000'
```
