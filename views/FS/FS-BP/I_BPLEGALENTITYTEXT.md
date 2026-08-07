---
name: I_BPLEGALENTITYTEXT
description: Bplegalentitytext
app_component: FS-BP
software_component: SAP_BASIS
release_state: released
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
# I_BPLEGALENTITYTEXT

**Bplegalentitytext**

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
| `BusinessPartnerLegalEntity` | ✓ | |  | `cast ( dd07t.domvalue_l as bp_entity_report )` |  |  |
| `BPLegalEntityDescription` |  | |  | `ddtext` |  |  |
| `_BPLegalEntity` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPLegalEntity` | `I_BPLegalEntity` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPLGLENTITYTXT',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { dataCategory: #TEXT,
                usageType: { dataClass: #CUSTOMIZING,    
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT],   
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'BusinessPartnerLegalEntity'                            
}             
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'BP Legal Entity - Text'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_BPLegalEntityText as select from dd07t
association [0..1] to I_BPLegalEntity as _BPLegalEntity on $projection.BusinessPartnerLegalEntity  = _BPLegalEntity.BusinessPartnerLegalEntity
association [0..1] to I_Language      as _Language      on $projection.Language       = _Language.Language
  {
@Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage as Language,
  
      @ObjectModel.text.element: ['BPLegalEntityDescription']
      @ObjectModel.foreignKey.association: '_BPLegalEntity'
  key cast ( dd07t.domvalue_l as bp_entity_report ) as BusinessPartnerLegalEntity,
      @Semantics.text: true
      
      dd07t.ddtext     as BPLegalEntityDescription,
      
      _BPLegalEntity,
      _Language  
}
where
      dd07t.domname  = 'BP_ENTITY_REPORT'
  and dd07t.as4local = 'A'
```
