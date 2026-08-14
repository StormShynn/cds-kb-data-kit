---
name: I_BPDEBTORGROUPTEXT
description: "Bpdebtorgrouptext"
semantic_vi: "View I_BPDEBTORGROUPTEXT cung cấp mô tả nhóm nợ khác nhau trong các ngôn ngữ cho các nhóm nợ đối tác kinh doanh. Nó được sử dụng để lấy thông tin văn bản cho nhóm nợ trong môi trường đa ngôn ngữ."
keywords:
  - "debtor group"
  - "business partner"
  - "multilingual"
  - "text view"
  - "sap cds"
  - "fs-bp"
  - "business partner debtor group"
  - "language"
  - "description"
semantic_en: "The I_BPDEBTORGROUPTEXT view provides debtor group descriptions in different languages for business partner debtor groups. It is used to retrieve text information for debtor groups in a multilingual environment."
app_component: FS-BP
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
