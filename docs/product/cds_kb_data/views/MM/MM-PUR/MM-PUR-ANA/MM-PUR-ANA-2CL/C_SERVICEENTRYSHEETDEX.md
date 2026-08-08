---
name: C_SERVICEENTRYSHEETDEX
description: "Serviceentrysheetdex"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - data-extraction
  - service
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_SERVICEENTRYSHEETDEX

**Serviceentrysheetdex**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceEntrySheet` | ✓ | |  |  |  |  |
| `ServiceEntrySheetName` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `PurchaseOrder` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `ApprovalStatus` |  | |  |  |  |  |
| `ApprovalDateTime` |  | |  |  |  |  |
| `ResponsiblePerson` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `MaterialDocument` |  | |  |  |  |  |
| `MaterialDocumentYear` |  | |  |  |  |  |
| `PurgDocExternalSystem` |  | |  |  |  |  |
| `PurgDocExternalReference` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `IsEndOfPurposeBlocked` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `_ServiceEntrySheetItemDEX` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_PurchaseOrder` | | ✓ | | | | |
| `_DocumentCurrency` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_ServiceEntrySheetItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceEntrySheetItemDEX` | `C_ServiceEntrySheetItemDEX` | [1..*] |
| `_Supplier` | `I_Supplier` | [1..1] |
| `_PurchaseOrder` | `C_PurchaseOrderDEX` | [1..1] |
| `_DocumentCurrency` | `I_Currency` | [1..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [1..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CMMSERVENTSHEET'
@EndUserText.label: 'Data Extraction for ServiceEntrySheet'
@AbapCatalog.compiler.compareFilter     : true
@AccessControl:{ authorizationCheck     : #CHECK,
                 personalData.blocking  : #REQUIRED
               }
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel :{ usageType.dataClass     : #TRANSACTIONAL,
                usageType.sizeCategory  : #L,
                usageType.serviceQuality: #D,
                supportedCapabilities   : [ #EXTRACTION_DATA_SOURCE ]
              }

@VDM.viewType                           : #CONSUMPTION
@Metadata.ignorePropagatedAnnotations   : true

//@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[ {
                        table           : 'mmpur_ses_header', role: #MAIN,
                        viewElement     : ['serviceentrysheet'],
                        tableElement    :['serviceentrysheet']
                      }
                    ]
        }
    }
}
@ObjectModel.sapObjectNodeType.name: 'ServiceEntrySheet'
@ObjectModel.modelingPattern: #ANALYTICAL_FACT
define view C_ServiceEntrySheetDEX
  as select from I_ServiceEntrySheetAPI01

  association [1..*] to C_ServiceEntrySheetItemDEX  as _ServiceEntrySheetItemDEX  on $projection.ServiceEntrySheet = _ServiceEntrySheetItemDEX.ServiceEntrySheet

  association [1..1] to I_Supplier                  as _Supplier               on $projection.Supplier = _Supplier.Supplier
  
  association [1..1] to C_PurchaseOrderDEX          as _PurchaseOrder          on $projection.PurchaseOrder = _PurchaseOrder.PurchaseOrder

  association [1..1] to I_Currency                  as _DocumentCurrency       on $projection.Currency = _DocumentCurrency.Currency

  association [1..1] to I_PurchasingOrganization    as _PurchasingOrganization on $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization

  association [1..1] to I_PurchasingGroup           as _PurchasingGroup        on $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup

{

  key ServiceEntrySheet        as ServiceEntrySheet,
      
      @Semantics.text: true
      ServiceEntrySheetName    as ServiceEntrySheetName,

      @ObjectModel.foreignKey.association: '_Supplier'
      Supplier                 as Supplier,
      
      @ObjectModel.sapObjectNodeTypeReference: 'PurchaseOrder'
      PurchaseOrder            as PurchaseOrder,

      @Semantics.booleanIndicator : true
      IsDeleted                as IsDeleted,

      ApprovalStatus           as ApprovalStatus,
      
      ApprovalDateTime         as ApprovalDateTime,

      ResponsiblePerson        as ResponsiblePerson,

      // OriginObjectType              as OriginObjectType,   " GFN ATC Error in underlying API IView.

      @ObjectModel.foreignKey.association: '_DocumentCurrency'
      Currency                 as Currency,

      MaterialDocument         as MaterialDocument,
      
      @Semantics.fiscal.year: true
      MaterialDocumentYear     as MaterialDocumentYear,

      PurgDocExternalSystem    as PurgDocExternalSystem,

      PurgDocExternalReference as PurgDocExternalReference,
      
      @Semantics.businessDate.at: true
      PostingDate              as PostingDate,
      
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      PurchasingOrganization   as PurchasingOrganization,
      
      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      PurchasingGroup          as PurchasingGroup,

      @Semantics.booleanIndicator : true
      IsEndOfPurposeBlocked    as IsEndOfPurposeBlocked,
      
      @Semantics.systemDateTime.createdAt: true
      CreationDateTime         as CreationDateTime,
      
      @Semantics.user.createdBy: true
      CreatedByUser            as CreatedByUser,
      
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime       as LastChangeDateTime,
      
      @Semantics.user.lastChangedBy: true
      LastChangedByUser        as LastChangedByUser,

      /* Associations */
      _Supplier,
      _PurchaseOrder,
      _DocumentCurrency,
      _PurchasingOrganization,
      _PurchasingGroup,

      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _ServiceEntrySheetItemDEX,
      
      _ServiceEntrySheetItem

}
```
