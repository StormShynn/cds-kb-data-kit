---
name: I_BPDEBTORGROUPTEXT
description: "Bpdebtorgrouptext"
app_component: FS-BP
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FS
  - FS-BP
  - interface-view
  - text-view
  - text
  - component:FS-BP
  - lob:Other
---
# I_BPDEBTORGROUPTEXT

**Bpdebtorgrouptext**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `BusinessPartnerDebtorGroup` | ✓ | |  | `cast ( dd07t.domvalue_l as bp_debtor_group )` |  |  |
| `BPDebtorGroupDescription` |  | |  | `ddtext` |  |  |
| `_BPDebtorGroup` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPDebtorGroup` | `I_BPDebtorGroup` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPDBTRGROUPTXT',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BusinessPartnerDebtorGroup', 
                usageType: { dataClass: #CUSTOMIZING,    
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SEARCHABLE_ENTITY
                                        ],  
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT             
              }    
@Analytics.dataExtraction.enabled: true                        
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@EndUserText.label: 'Debtor Group - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_BPDebtorGroupText as select from dd07t
association [0..1] to I_BPDebtorGroup as _BPDebtorGroup on $projection.BusinessPartnerDebtorGroup  = _BPDebtorGroup.BusinessPartnerDebtorGroup
association [0..1] to I_Language      as _Language      on $projection.Language       = _Language.Language
  {
@Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage as Language,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.element: ['BPDebtorGroupDescription']
      @ObjectModel.foreignKey.association: '_BPDebtorGroup'
  key cast ( dd07t.domvalue_l as bp_debtor_group ) as BusinessPartnerDebtorGroup,
      @Semantics.text: true
      dd07t.ddtext     as BPDebtorGroupDescription,
      
      _BPDebtorGroup,
      _Language  
}
where
      dd07t.domname  = 'BP_DEBTOR_GROUP'
  and dd07t.as4local = 'A'
```
