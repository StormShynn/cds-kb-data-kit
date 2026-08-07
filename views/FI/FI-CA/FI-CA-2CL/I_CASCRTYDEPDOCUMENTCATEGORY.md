---
name: I_CASCRTYDEPDOCUMENTCATEGORY
description: Cascrtydepdocumentcategory
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - document
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CASCRTYDEPDOCUMENTCATEGORY

**Cascrtydepdocumentcategory**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CASecurityDepositDocCategory` | ✓ | |  | `cast( left( dd07l.domvalue_l, 3 ) as secdep_doc_category_kk preserving type)` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAScrtyDepDocCategoryText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Security Deposit Document Category'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CASecurityDepositDocCategory',
                sapObjectNodeType.name: 'ContrAcctgScrtyDepDocCategory',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #B,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAScrtyDepDocumentCategory
  as select from dd07l
  
  association [0..*] to I_CAScrtyDepDocCategoryText as _Text on $projection.CASecurityDepositDocCategory = _Text.CASecurityDepositDocCategory

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l, 3 ) as secdep_doc_category_kk preserving type) as CASecurityDepositDocCategory,

      _Text
}
where
      dd07l.domname  = 'SECDEP_DOC_CATEGORY_KK'
  and dd07l.as4local = 'A'
```
